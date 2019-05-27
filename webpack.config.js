const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: {
        main: './src/assets/scripts/main.js',
        admin: './src/assets/scripts/admin.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = config;