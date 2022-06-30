class Captcha {
  constructor(font, align, baseline, width, height, bgColor, color, length) {
    this.font = font;
    this.align = align;
    this.baseline = baseline;
    this.width = width;
    this.height = height;
    this.color = color;
    this.bgColor = bgColor;
    this.length = length;
    this.createcaptchaObject = () => {
      const captcha = document.createElement('canvas');
      const newImage = document.createElement('image');

      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      };

      const getCharacter = () => {
        const arr = [];
        arr.push(getRandomInt(97, 122));
        arr.push(getRandomInt(65, 90));
        arr.push(getRandomInt(48, 57));
        const value = arr[getRandomInt(0, arr.length)];
        return String.fromCharCode(value);
      };

      const getWord = () => {
        let newWord = ``;
        let count = 0;
        while (count < this.length) {
          newWord += getCharacter();
          count++;
        }
        return newWord;
      };

      const newWord = getWord();
      const context = captcha.getContext('2d');
      context.canvas.width = this.width;
      context.canvas.height = this.height;
      context.font = this.font;
      context.textAlign = this.align;
      context.textBaseline = this.baseline;
      context.fillStyle = this.bgColor;
      context.fillRect(0, 0, this.width, this.height);
      context.fillStyle = this.color;
      context.fillText(newWord, this.width / 2, this.height / 2);
      return { canvas: context.canvas, word: newWord };
      
      newImage.setAttribute('src', context.canvas.toDataURL());
      newImage.setAttribute('data-key', newWord);
      return newImage.outerHTML;
    };
  }
}
function createCaptcha() {
  const createcaptchaObject = new Captcha(
    '35px Arial',
    'center',
    'middle',
    300,
    150,
    'transparent',
    '#B885',
    6
  ).createcaptchaObject();
  return (createcaptchaObject);
}

