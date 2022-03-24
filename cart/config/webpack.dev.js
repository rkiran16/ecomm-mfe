const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require('../package.json');


const devConfig = {
  mode: "development",
  devServer: {
     port: 9003,
     historyApiFallback: {
        index: 'index.html'
     }
  },
  plugins: [
    new ModuleFederationPlugin({
       name: "cart",
       filename: 'remoteEntry.js',
       exposes: {
          "./CartIndex": "./src/bootstrap"
       },
       shared: packageJson.dependencies
    })
   ]
}

module.exports = merge(commonConfig, devConfig);