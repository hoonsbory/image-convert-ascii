## Convert Image to Ascii

convert img element to ascii  
![screenshot](./convertAscii.png)

### Installation

```bash
$ npm install image-convert-ascii
```

### Example

```html
<body style="font-size: 10px">
  <pre id="pre"></pre>
  <img id="img" src="./asciiTest.png" />
</body>
```

```javascript
import Convert from 'image-convert-ascii';
//input img, pre element ID and size
new Convert('img', 'pre', 100, 100);
```
