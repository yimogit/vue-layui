## 下载安装 node.js

* 下载地址：https://nodejs.org/en/download/
* 当前版本：`Latest LTS Version: 8.11.1 (includes npm 5.6.0)`
* 当前系统：`windows` ,并安装在 `D:\nodejs`
* 全局设置：将 `D:\nodejs\node_global` 加入环境变量并配置 npm

```js
npm config set prefix "D:\nodejs\node_global" //设置全局包目录
npm config set cache "D:\nodejs\node_cache" //设置缓存目录
```

此时使用 `npm install -g cnpm`，可将 cnpm 安装在 `D:\nodejs\node_global` 目录，并能够使用 `cnpm install` 安装包了

注：若是更新 node (覆盖安装)后使用 npm 无响应需要先将 `C:\Users\Administrator\.npmrc` 删除若有墙的问题，可以使用 cnpm 安装所有的包

## vscode 中 vue 的相关配置

> 一个越来越好的编辑器，没安装可以先[下载](https://code.visualstudio.com/)
> 下载后一些基本的操作

* `ctrl+p` 调出一个面板 然后输入?，可以查看命令帮助
* 常用的东西通过 `ctrl+shift+p` 即可找到想要的东西
  ![图片](https://dn-coding-net-production-pp.qbox.me/f2c36579-02c2-4b20-ad09-0aea0901ed4c.png)

在使用 vue-cli 生成/搭建框架后，若是在 vscode 中进行开发需要进行一些配置方能舒服的撸码

### 1. 需插件安装

* Vetur : 语法高亮等功能
* ESlint : 代码风格检测
* Prettier formatter for Visual Studio Code: 为了配合 ESlint

### 2. 插件设置

* vue 的模板格式化：
  `"vetur.format.defaultFormatter.html":"js-beautify-html"`
* vue 模板的 eslint 校验

```json
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue",
        {
            "language": "html",
            "autoFix": true
        }
    ]
```

* Prettier 设置去除不必要空格：`"prettier.semi": false`
* Prettier 设置格式化后`"`变`'`：`"prettier.singleQuote": true`

* 在 vscode 中排除 node_modules 等文件夹：

```json
"files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": true,
    "**/package-lock.json": true,
},
```

### 完整的 vue 相关用户设置如下

```json
"files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": true,
    "**/package-lock.json": true
},
"vetur.format.defaultFormatter.html": "js-beautify-html",
"editor.formatOnSave": true,
"prettier.semi": false,
"prettier.singleQuote": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    {
        "language": "html",
        "autoFix": true
    }
]
```
