module.exports={
    module:{
        rules:[
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[local]'
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    presets: [
                        "es2017", "stage-0", "react",
                        {'env': {
                                "plugins": ["transform-react-constant-elements"],
                                target: {browser: ['last 2 versions']}
                            }

                        }
                    ]
                }
            }
        ]

    }
};