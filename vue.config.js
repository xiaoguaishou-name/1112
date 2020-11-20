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
  // 代理
  devServer:{
    proxy:{
      "/api":{
        target:"http://192.168.1.235:8686",
        pathRewrite:{
          "^/api":""
        },
        changeOringin:true
      } 
    }
  }
}
