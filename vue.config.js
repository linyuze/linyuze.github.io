const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/linyuze.github.io/'
    : '/'
})
/*module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/linyuze.github.io/'
    : '/'
})
//该方法只有后面的能够起作用*/