const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

const app = express();
app.use(cookieSession({
    // setup how long cookie session lasts
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.CookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
// Link authRoutes to the app
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`iMeet server is up on port ${PORT}`);
});
