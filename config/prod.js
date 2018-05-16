// for Production, we have different keys and database
module.exports = {
    GoogleClientID: process.env.GOOGLE_CLIENT_ID,
    GoogleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    FacebookAppID: process.env.FACEBOOK_APP_ID,
    FacebookAppSecret: process.env.FACEBOOK_APP_SECRET,
    InstagramClientID: process.env.INSTAGRAM_CLIENT_ID,
    InstagramClientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    MongoURI: process.env.MONGO_URI,
    CookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
};

