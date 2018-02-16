const path = require('path');

module.exports = {
    entry: { 'bundle': './ClientApp/boot.js', 'signin': './ClientApp/signin.js'},

    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: '[name].js',
        publicPath: 'wwwroot'
    }
};