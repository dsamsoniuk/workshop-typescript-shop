const path = require('path');
const root = path.join(__dirname, '..', '..');

module.exports = {
    mode : 'development',
    entry: './src/front-end/scripts/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.join(root, "dist", "front-end"), // string
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules:[
            {
                test: (/\.ts$/),
                loader:'ts-loader'
            },
            {
                test: (/\.html$/),
                loader:'file-loader?name=[name].[ext]'
            },
            {
                test: (/\.css$/),
                loader:[
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    }
}