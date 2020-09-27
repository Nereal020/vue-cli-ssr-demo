# vue-ssr-demo2
在vue-cli3版本添加服务端渲染


## Project setup
```
npm install
```

### 打包编译
```
npm run build:win or npm run build:mac
```

这里存在一个问题，打包好的dist文件里面包含index.html,在进入about页面时是路由加载，而不是服务端渲染。
解决办法：①将dist下的index.html删除
       ②或者 将
       ```
       server.use(express.static('./dist', { index: false }))
       改为:
       server.use(express.static('./dist/js', { index: false }))
       server.use(express.static('./dist/css', { index: false }))
       server.use(express.static('./dist/img', { index: false }))
       ```
       
### 运行
```
cd server 
node server.js
```



