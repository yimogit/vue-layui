var path = require('path')
var express = require('express')
var mockjs = require('express-mockjs')

var app = express()

// 使用默认路径 '/'（不推荐）
// app.use(mockjs(path.join(__dirname, 'mocks')))
// 自定义路径 '/api'
var config = {
  port: 3000
}
app.use('/api', mockjs(path.join(__dirname, 'api')))

// 获取port参数
var args = process.argv
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--port' && i < args.length - 1 && args[i + 1] > 0) {
    config.port = args[i + 1]
    break
  }
}

console.log('mock-server[mockjs-lite]:http://localhost:' + config.port)
// console.log('mockjs-lite定义：http://mockjs-lite.js.org/docs/examples.html')
app.listen(config.port)
