const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
   mode: "development",
   devServer: {
      port: 9002
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
      new ModuleFederationPlugin({
          name: "pdp",
          filename: "remoteEntry.js",
          exposes: {
            './PdpIndex': './src/bootstrap'
          },
          shared: {
            react: {
               singleton: true
            },
            'react-dom': {
               singleton: true
            }
         }
      }),
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
    ]
}