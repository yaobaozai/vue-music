const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/api/getDiscList': {
        target: 'http://localhost:3017',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'common': resolve('src/common'),
        'components': resolve('src/components'),
        'api': resolve('src/api'),
        'base': resolve('src/base')
      }
    }
  }
}
