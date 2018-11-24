const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
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
