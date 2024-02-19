export default class Convert {
  asciiArr = ['@', '$', '#', '&', '*', '=', '-', ',', '.', ' ', ' '];

  /**
   *
   * @param {string} imageId  image element id
   * @param {string} preId  pre element id
   * @param {number} width  ascii code image width
   * @param {number} height ascii code image height
   */
  constructor(imageId, preId, width, height) {
    this.IMG = document.getElementById(imageId);
    this.PRE = document.getElementById(preId);
    this.width = width;
    this.height = height / 2;
    this.startConvert();
  }

  startConvert() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = this.width;
    canvas.height = this.height;

    ctx.drawImage(this.IMG, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = this.getPixelData(imageData);

    this.PRE.innerText = this.lightnessToAscii(pixelData);
  }

  /**
   * convert lightness to ascii code
   * @param {number[][]} pixelData
   * @returns {string}
   */
  lightnessToAscii(pixelData) {
    let str = '';
    pixelData.forEach((rgb, idx) => {
      const lightness = this.calculateLightness(rgb);
      str += this.asciiArr[Math.floor(lightness / 10)];
      if ((idx + 1) % this.width == 0) str += '\n';
    });
    return str;
  }

  /**
   * devide pixel data from canvas image data
   * @param {number[]} imageData
   * @returns {number[][]}
   */
  getPixelData(imageData) {
    const pixelData = [];
    const { data } = imageData;
    for (let i = 0; i < data.length; i += 4) {
      pixelData.push([data[i], data[i + 1], data[i + 2]]);
    }
    return pixelData;
  }

  /**
   * calculate lightness using RGB data
   * @param {number[]} arr
   * @returns {number}
   */
  calculateLightness(arr) {
    const R = arr[0];
    const G = arr[1];
    const B = arr[2];

    const fR = R / 255.0;
    const fG = G / 255.0;
    const fB = B / 255.0;

    const cMax = Math.max(fR, fG, fB);
    const cMin = Math.min(fR, fG, fB);

    const lightness = (cMax + cMin) / 2;
    const lightnessPercent = Math.round(lightness) * 100;
    return lightnessPercent;
  }
}
