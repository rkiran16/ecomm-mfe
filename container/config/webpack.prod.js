const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;


const prodConfig = {
   mode: 'production',
   output: {
      filename: '[name].[contenthash].js'
   },
   plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
         products: `products@${domain}/products/remoteEntry.js`,
         pdp: `pdp@${domain}/pdp/remoteEntry.js`,
         cart: `cart@${domain}/cart/remoteEntry.js`
      },
      shared: packageJson.dependencies 
   })
   ]
}

module.exports = merge(commonConfig, prodConfig);