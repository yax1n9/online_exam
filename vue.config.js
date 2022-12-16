const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081
  }
})

// devServer: {
//   port: 18892,
//     open: true,
//     proxy: {
//     '/kgapi': {
//       // target: 'http://10.21.10.93:18282',
//       target: 'http://10.19.87.5:9031',
//         progress: false,
//         changeOrigin: true, // 跨域访问设置，true代表跨域
//         pathRewrite: {
//         '^/kgapi': '/',
//       }
//     }
//   }
// },
