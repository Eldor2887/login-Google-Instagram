const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cookieSession({
    // setup how long cookie session lasts
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.CookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
// Link authRoutes to the app
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    // if app in production mode
    // express will serve our production assets like main.js main.css
    app.use(express.static('client/build'));
    // Express will serve index.html if it doesnt recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`iMeet server is up on port ${PORT}`);
});
