//THIS FILE IS RESPONSIBLE FOR AUTH FLOW AND GETTING CLIENTS FROM GOOGLE,INSTAGRAM AND FACEBOOK AND PASS THEM THRU SCHEMA AND SAVE THEM INTO MY REMOTE DATABASE
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const keys = require('../config/keys');
// Create User model and pass it thru schema
const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    instagramId: String,
    userFullname: String,
    userFirstname: String,
    userLastname: String,
    userProfilePicture: String,
    userEmail: String,
    password: String
});
const User = mongoose.model('users',  userSchema);
// generate cookie ID for each user
passport.serializeUser((user, done) => {
    done(null, user.id);
});
// take cookie ID and make it user's real ID and turn into user model in database
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});
// Using Google strategy, if user signs in with google account
passport.use(
    new GoogleStrategy({
        clientID: keys.GoogleClientID,
        clientSecret: keys.GoogleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        console.log('Google: ', profile);
        const existingUser = await User.findOne({ googleId: profile.id})
            if (existingUser) {
                // we already have this user with ID
                done(null, existingUser);
            }
                // This is new user, give ID and save into database
        const user = await new User({
                    googleId: profile.id,
                    userFullname: profile.displayName,
                    userFirstname: profile.name.givenName,
                    userLastname: profile.name.familyName,
                    userEmail: profile.emails[0].value,
                    userProfilePicture: profile.photos[0].value.substring(0, profile.photos[0].value.indexOf('?'))
                }).save()
               done(null, user);
    })
);
// Using facebook strategy, if user signs in with facebook account
passport.use(
    new FacebookStrategy({
        clientID: keys.FacebookAppID,
        clientSecret: keys.FacebookAppSecret,
        callbackURL: '/auth/facebook/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        console.log('Facebook: ', profile);
        const existingUser = await User.findOne({facebookId: profile.id})
            if (existingUser) {
                // we already have this user with id
                done(null,existingUser);
            }
        const user = await new User({
                    facebookId: profile.id
                }).save()
                done(null, user);
    })
);
// Using Instagram strategy, if users signs in with instagram account
passport.use(new InstagramStrategy({
    clientID: keys.InstagramClientID,
    clientSecret: keys.InstagramClientSecret,
    callbackURL: '/auth/instagram/callback',
    proxy: true
}, 
async (accessToken, refreshToken, profile, done) => {
    console.log('Instagram: ', profile);
    const existingUser = await User.findOne({instagramId: profile.id})
        if (existingUser) {
            // we already have this user with id
            done(null,existingUser);
        }
            // new user and save it into database
    const user = await new User({
                instagramId: profile.id,
                userFullname: profile.displayName,
                userFirstname: profile.name.givenName,
                userLastname: profile.name.familyName,
                userProfilePicture: profile._json.data.profile_picture
            }).save()
           done(null, user);
}));
// Link routes to the app
module.exports = (app) => {
    // Route handler for google auth
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    // Route handler for Facebook auth
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['profile', 'email']
    }));
    // Route handler for Instagram auth
    app.get('/auth/instagram', passport.authenticate('instagram'));

    // Callback route handlers
    app.get('/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/profile');
    });

    app.get('/auth/facebook/callback', 
    passport.authenticate('facebook'),
    (req, res) => {
    res.redirect('/profile');
   });

    app.get('/auth/instagram/callback', 
        passport.authenticate('instagram'),(req, res) => {
        res.redirect('/profile');
    });
    // logout route handler
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    // route handle to test req.user
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
   

};

// Connect mongoose to mongoDB
mongoose.connect(keys.MongoURI).then(() => {
    console.log('Remote MongoDB connected...');
}).catch((err) => {
    console.log(err);
});