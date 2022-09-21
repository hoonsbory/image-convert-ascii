## Convert Image to Ascii

convert img element to ascii  
![screenshot](https://cdn.jsdelivr.net/gh/hoonsbory/image-convert-ascii/convertAscii.png)

### Installation

#### use npm

```bash
$ npm install image-convert-ascii
```

### in browser

```html
<script src="https://cdn.jsdelivr.net/gh/hoonsbory/image-convert-ascii/notModule.js"></script>
```

### Syntax

```javascript
new Convert(img, pre, width, height);
```

### Example

```html
<body style="font-size: 10px">
  <pre id="pre"></pre>
  <img id="img" src="./asciiTest.png" />
</body>
```

#### use npm

```javascript
import Convert from 'image-convert-ascii';
//input img, pre element ID and size
new Convert('img', 'pre', 100, 100);
```

#### in browser

```html
<script>
  new Convert('img', 'pre', 100, 100);
</script>
```
