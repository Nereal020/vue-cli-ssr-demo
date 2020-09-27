import {
  createApp
} from './main'
// const { createBundleRenderer } = require('vue-server-renderer')
// const clientManifest = require('./dist/vue-ssr-client-manifest.json')
// const template = require('fs').readFileSync('/dist/index.template.html', 'utf-8')
// const serverBundle = require('./dist/vue-ssr-server-bundle.json')
// const renderer = createBundleRenderer(serverBundle, {
//   runInNewContext: false, // 推荐
//   template,
//   clientManifest
// })

// 客户端特定引导逻辑……

const {
  app, router
} = createApp()

// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => { app.$mount('#app') })

// app.$mount('#app')
