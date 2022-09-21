## Convert Image to Ascii

convert img element to ascii  
![screenshot](https://cdn.jsdelivr.net/gh/hoonsbory/image-convert-ascii/convertAscii.png)

### Installation

#### use npm

```bash
$ npm install image-convert-ascii
```

### Syntax

```javascript
new Convert(img element ID, pre element ID, width, height);
```

### Example

#### pre,img element with ID in HTML

```html
<body style="font-size: 10px">
  <pre id="pre"></pre>
  <!-- Insert the image want to convert -->
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
<script type="module">
  import Convert from 'https://cdn.jsdelivr.net/gh/hoonsbory/image-convert-ascii/index.js';
  new Convert('img', 'pre', 100, 100);
</script>
```
