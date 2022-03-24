const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


const devConfig = {
  mode: "development",
  devServer: {
     port: 9000,
     historyApiFallback: {
        index: 'index.html'
     }
  },
  plugins: [
   new ModuleFederationPlugin({
      name: 'container',
      remotes: {
         products: 'products@http://localhost:9001/remoteEntry.js',
         pdp: 'pdp@http://localhost:9002/remoteEntry.js',
         cart: 'cart@http://localhost:9003/remoteEntry.js'
      }
   })
 ]
}

module.exports = merge(commonConfig, devConfig);