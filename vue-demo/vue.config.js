module.exports = {
    configureWebpack: {
      devtool: 'source-map'
    },
    devServer: {
      proxy: {
        '/apis': {
          target: 'https://server.hzhaya.com',
          changeOrigin:true,
          pathRewrite: {
            '^/apis': ''
          }
        }
      }
    }
  }