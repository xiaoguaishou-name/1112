const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');

module.exports = {
  lintOnSave: false,
  outputDir: 'docs',
  // baseUrl: '/',
  configureWebpack: {
    plugins: [
      new HtmlWebpackInlinePlugin({
        compress: false
      })
    ]
  },
}
