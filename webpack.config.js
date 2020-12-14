const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const fse = require('fs-extra');
const { defer } = require('lodash');

class RunAfterCompile {
    apply(compiler) {
        compiler.hooks.done.tap('Copy images', () => {
            fse.copySync('./app/assets/images', './docs/assets/images');
        });
    }
}

let cssConfig = {
    test: /\.s[ac]ss$/i,
    use: [
        'css-loader?url=false',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        'autoprefixer'
                    ]
                }
            }
        }, 
        'sass-loader'
    ]
}

let pages = fse.readdirSync('./app').filter(file => {
    return file.endsWith('.html');
}).map(page => {
    return new HtmlWebpackPlugin({
        filename: page,
        template: `./app/${page}`
    });
});
let config = {
    entry: './app/assets/scripts/app.js',
    plugins: pages,
    module: {
        rules: [
            cssConfig
        ]
    }
};

if(currentTask == 'dev') {
    cssConfig.use.unshift('style-loader');
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    }
    config.devServer = {
        before: function(app, server) {
            server._watch('app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    }
    config.mode = 'development';
}

if(currentTask == 'build') {
    cssConfig.use.unshift(MiniCssExtractPlugin.loader);
    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'docs'),
    }
    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    })
    config.mode = 'production';
    config.optimization = {
        splitChunks: { chunks: 'all' },
        minimizer: [ new CssMinimizerPlugin() ]
    }
    config.plugins.push(
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['**/*', '!CNAME*']}), 
        new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
        new ScriptExtHtmlWebpackPlugin({defaultAttribute: 'defer'}),
        new RunAfterCompile()
        );
}

module.exports = config;