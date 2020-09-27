const express = require('express')
// const path = require('path')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const server = require('express')()
const renderer = require('vue-server-renderer').createBundleRenderer(
  serverBundle,
  {
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
  }
)
// 引入静态文件  否则运行报错
// server.use(express.static(path.resolve(__dirname, './dist')))
server.use(express.static('./dist', { index: false }))

server.get('*', (req, res) => {
  const context = {
    title: 'ssr demo=====',
    meta: `
    <meta charset="utf-8">
    `,
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080, () => {
  console.log('已监听 localhost:8080')
})
