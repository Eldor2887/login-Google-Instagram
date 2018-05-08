if (process.env.NODE_ENV === 'production') {
    // we are in production, return prod.js keys
    module.exports = require('./prod');
} else {
    // we are in development, return dev.js keys
    module.exports = require('./dev');
}