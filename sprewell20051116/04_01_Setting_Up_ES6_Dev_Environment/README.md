# 04_01 JaveScript_Essentials - webpack

## Setup webpack
### 01 - 建立專案資料夾
可以建立隨意的名字作為專案資料夾，然後執行  `npm init -y` 建立 `package.json`。`package.json` 主要用於管理專案中的套件。

```
$ mkdir es6
$ cd es6
$ npm init -y
```
```
# package.json

{
  "name": "04_01_Setting_Up_ES6_Dev_Environment",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.5.5"
  }
}
```

### 02 - 安裝 webpack
產生 `node_modules` 資料夾，裡面存放 node.JS 使用的 module 們。
```
$ npm install --save-dev webpack
```


### 03 - 新增應用程式資料夾 `app` 跟 `build`
新增 NodeJS 應用程式的資料夾後加入 index.html 以及 index.js 做為第一個專案練習。
```
$ mkdir app
$ mkdir build
$ touch app/index.js
$ touch build/index.html
```
在 index.html 中建立 html 基本的架構。
在 index.js 中輸入 `document.log("Hi")` 以便日後觀察

### 04 - 新增 webpack configuration file `webpack.config.js`
新增 `webpack.config.js`。這邊注意與課程中教學不同，要讓 webpack 找到 build 資料夾需要使用 `path.resolve(__dirname,'build')` 後面才可以正確執行。  
相關 issue : https://github.com/sprewell20051116/JavascriptCourse/issues/5

```
# webpack.config.js

const path = require('path');

module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
}
```
編輯完 `webpack.config.js`後，再編輯 `package.json`的 script。告訴 NodeJS 要去 build `webpack`。
```
# webpack.config.js  

...
"scripts": {
    "build": "webpack"
  }
...
```

### 05 - 執行並打包 webpack
當執行 `npm run build` 後，系統會執行 webpack 的指令並打包，開啟 `index.html` 後就能看到程式正確執行。成功執行後可以看到 build 資料夾中多了一個 `bundle.js`
``` 
$ npm run build
```
```  
> 04_01_Setting_Up_ES6_Dev_Environment@1.0.0 build /Users/GIGIGUN/Desktop/JavaScript_Cource/sprewell20051116/04_01_Setting_Up_ES6_Dev_Environment
> webpack

Hash: 7dece2dc3d27b19310e2
Version: webpack 3.5.5
Time: 57ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.62 kB       0  [emitted]  main
   [0] multi ./app/index.js 28 bytes {0} [built]
   [1] ./app/index.js 28 bytes {0} [built]
```


### 06 - 結
使用瀏覽器開啟 `build/index.html`，使用 inspector 開啟 Javascript Console 可以看到在上面 `app/index.js` 中的 `console.log('Hello World');
`。


#### ref
- 使用 Webpack 建立 React 專案開發環境 : https://rhadow.github.io/2015/04/02/webpack-workflow/
- WEBPACK入門教學筆記 : http://blog.kkbruce.net/2015/10/webpack.html#.WZbzEZOg9Pt
