const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  devServer: {
    proxy: 'http://localhost:3000',
    port: 8081,
  },
  configureWebpack: {
    plugins: [
      new MonacoEditorWebpackPlugin({
        languages: ['javascript', 'html', 'css'],
      }),
    ],
  },
}
