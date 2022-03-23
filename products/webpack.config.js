const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
   mode: "development",
   devServer: {
      port: 9001
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
         name: 'products',
         filename: 'remoteEntry.js',
         exposes: {
            './ProductsIndex': './src/bootstrap'
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