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

    this.PRE.innerText = this.lightness_to_ascii(pixelData);
  }

  /**
   * convert lightness to ascii code
   * @param {number[][]} pixelData
   * @returns {string}
   */
  lightness_to_ascii(pixelData) {
    let str = '';
    pixelData.forEach((rgb, idx) => {
      const lightness = Math.round(this.calculateLightness(rgb) * 100);
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
    let tempArr = [];
    imageData.data.forEach((num, idx) => {
      if ((idx + 1) % 4 != 0) tempArr.push(num);
      else {
        pixelData.push(tempArr);
        tempArr = [];
      }
    });
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
    let Max = 0.0;
    let Min = 0.0;

    let fR = R / 255.0;
    let fG = G / 255.0;
    let fB = B / 255.0;

    if (fR >= fG && fR >= fB) Max = fR;
    else if (fG >= fB && fG >= fR) Max = fG;
    else if (fB >= fG && fB >= fR) Max = fB;

    if (fR <= fG && fR <= fB) Min = fR;
    else if (fG <= fB && fG <= fR) Min = fG;
    else if (fB <= fG && fB <= fR) Min = fB;

    let Lightness = (Min + Max) / 2.0;

    return Lightness;
  }
}
