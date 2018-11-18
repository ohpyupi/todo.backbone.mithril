const path = require('path');

const plugins = [];

const rules = [
    {
        test: /backbone\.js$/,
        loader: 'imports-loader?define=>false',
    },
];

module.exports = {
    entry: './src/index.js',
    module: {
        rules,
    },
    plugins,
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'app.js',
    },
};
