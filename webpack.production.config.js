const defaults = require('./webpack.config.js')

delete(defaults.devtool)
delete(defaults.devServer)
console.log(defaults.plugins)
module.exports = {
  ...defaults,
  plugins: [
    ...defaults.plugins,
    //any other production plugins
  ],
  mode: 'production',
  optimization: {
    mangleWasmImports: true,
    removeAvailableModules: true,
    chunkIds: 'total-size'
  }
}
