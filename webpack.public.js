const path=require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    mode:'development',
    entry:'./src/public/index.js',
    output: {
        filename: "public.js",
        path: path.resolve(__dirname,'public')
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:3001'
        })
    }
};

module.exports = merge(baseConfig,config);