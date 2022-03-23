const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

module.exports = {
   mode: "development",
   devServer: {
      port: 9003
   },
   module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
               presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
      ]
    },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html'
      }),
      new ModuleFederationPlugin({
         name: "cart",
         filename: 'remoteEntry.js',
         exposes: {
            "./CartIndex": "./src/bootstrap"
         },
         shared: {
            react: {
               singleton: true
            },
            'react-dom': {
               singleton: true
            }
         }
      })
   ]
}