# vue-layui-admin

一个结合 vue+layui 实际的后台模板框架

## 特性

* layui 的 vue 封装
* 简单易用
* 一切尽在掌握之中
* 代码生成

## 在线演示

## 安装使用

若不会配置 node-vscode-vue 相关环境可以参考： [在 vscode 中配置 vue 开发环境](./docs/在VsCode中配置vue开发环境.md)

### 常用命令说明

* 安装项目依赖包
  `npm install --registry=https://registry.npm.taobao.org`
* 启动 mock 服务器
  `npm run mock`，//使用 express-mockjs 构建的一个本地 mock 服务，[52cik/express-mockjs](https://github.com/52cik/express-mockjs)
* 启动开发服务器
  `npm run dev`
* 打包项目
  `npm run build`

### 环境依赖

```js
node: >= 6.0.0
npm: >= 3.0.0
```

## 技术栈

* [Vue](http://cn.vuejs.org/) 当下最流行的前端 JavaScript 框架
* [VueRouter](https://router.vuejs.org/zh-cn/) 基于 Vue 的路由插件
* [Vuex](https://vuex.vuejs.org/zh-cn/) 管理 Vue 中多组件共享状态的插件，类似 react 的 redux
* [Axios](https://github.com/mzabriskie/axios) 当前最流行的一个 http 库
* [layui](https://github.com/sentsin/layui/) 一款好看(采用自身模块规范编写)的情怀型前端 UI 框架

## 相关链接

* [yimogit/me-admin-template](https://github.com/yimogit/me-admin-template)

## 总结

项目中组件的封装会更多的考虑实际项目中的场景，解决开发时的痛点
