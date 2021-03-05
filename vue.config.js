module.exports = {
  lintOnSave : false,
  publicPath: '/',
  assetsDir: process.env.BASE_URL,
  configureWebpack: {
    entry: ["babel-polyfill", "./src/main.js"]
  }
}