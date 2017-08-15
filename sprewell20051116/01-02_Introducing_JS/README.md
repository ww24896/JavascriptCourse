# 01 Introducing JavaScript
- Copy full path of `index.html` and paste to Web browser
- Right click and chose inspector  
- Select console and check JavaScript execution log.

## About
#### index.html
```
...
  <body>
    <div id="example">
    </div>
    <h1>使用 Atom 編輯器 敲 "html" 就可以自動完成啦~</h1>
    <script type="text/javascript" src="./index.js">
    </script>
  </body>
...
```
#### index.js
```
console.log("[Casper] Hello javascript in index.js file");
console.log(typeof document);
console.log(document);
document.getElementById('example').innerHTML = 'Jacascript Rules'
```
Then you can see log in inspector of Browser.
