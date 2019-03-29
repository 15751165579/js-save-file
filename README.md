# js-save-file

  <a href="https://www.npmjs.com/package/js-save-file"><img src="https://img.shields.io/npm/v/js-save-file.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/js-save-file"><img src="https://img.shields.io/npm/l/js-save-file.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/js-save-file"><img src="https://img.shields.io/npm/dm/js-save-file.svg" alt="Downloads"></a>

  download files to save locally by JavaScript.

### Installing

  Using npm:

```s
  npm install js-save-file
```

  Using script:

```s
  <script src="./dist/download.js"></script>
```

### Example

```JavaScript
import JSSaveFile from 'js-save-file'

const save = new JSSaveFile(url, '自定义下载图片名称')
save.init()
save.on('progress', ({ loaded, total }) => {
  console.log(`总字节数：${total} 已加载字节数：${loaded}`)
})
save.on('error', () => {
  console.log('下载失败')
})
save.on('complete', () => {
  this.$message('下载完成')
})
```

### License

  MIT

