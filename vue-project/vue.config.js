module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch') //prefetch 기능 disable
  },
  devServer: {
    proxy: {
      '/api' : {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: '../backend/public'
}
