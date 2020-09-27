const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = {
  outputDir: 'server/dist',
  configureWebpack: () => {
    if (process.env.WEBPACK_TARGET === 'node') {
      return {
        entry: './src/entry-server.js',
        target: 'node',
        devtool: 'source-map',
        output: {
          libraryTarget: 'commonjs2'
        },
        externals: nodeExternals({
          allowlist: /\.css$/
        }),
        plugins: [new VueSSRServerPlugin()],
        optimization: { splitChunks: false }
      }
    } else {
      return {
        entry: './src/entry-client.js',
        plugins: [
          new VueSSRClientPlugin()
        ]
      }
    }
  }
}
