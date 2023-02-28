const path = require('path')
const CracoLessPlugin = require('craco-less');

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // webpack
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": resolve("src/components"),
      "utils": resolve("src/components")
    }
  },
  plugins: [
    {
      // less
      plugin: CracoLessPlugin,
      // 主题定制
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { '@primary-color': '#1DA57A' },
      //       javascriptEnabled: true,
      //     },
      //   },
      // },
    },
  ],
}