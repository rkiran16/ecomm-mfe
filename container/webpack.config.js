const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
   mode: "development",
   devServer: {
      port: 9000
   },
   plugins: [
     new ModuleFederationPlugin({
        name: 'container',
        remotes: {
           products: 'products@http://localhost:9001/remoteEntry.js',
           pdp: 'pdp@http://localhost:9002/remoteEntry.js',
           cart: 'cart@http://localhost:9003/remoteEntry.js'
        }
     }),
     new HtmlWebpackPlugin({
       template: './public/index.html'
     })
   ]
}