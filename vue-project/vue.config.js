module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch') //prefetch 기능 disable
  }
}
