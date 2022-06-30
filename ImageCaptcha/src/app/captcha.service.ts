import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  private font: string = '';
  private align: CanvasTextAlign = "center";
  private baseline: CanvasTextBaseline = "middle";
  private width: number = 300;
  private height: number = 100;
  private color: string = '';
  private bgColor: string = '';
  private length: number = 5;
  constructor() {
  }
  private getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  private getCharacter = () => {
    const arr = [];
    arr.push(this.getRandomInt(97, 122));
    arr.push(this.getRandomInt(65, 90));
    arr.push(this.getRandomInt(48, 57));
    const value = arr[this.getRandomInt(0, arr.length)];
    return String.fromCharCode(value);
  };
  private getWord = () => {
    let newWord = ``;
    let count = 0;
    while (count < this.length) {
      newWord += this.getCharacter();
      count++;
    }
    return newWord;
  };
  createcaptchaObject = (font: string, align: CanvasTextAlign, baseline: CanvasTextBaseline, width: number, height: number, bgColor: string, color: string, length: number) => {
    const captcha = document.createElement('canvas');
    const newImage = document.createElement('image');
    this.font = font;
    this.align = align;
    this.baseline = baseline;
    this.width = width;
    this.height = height;
    this.color = color;
    this.bgColor = bgColor;
    this.length = length;

    const newWord = this.getWord();
    const context = <CanvasRenderingContext2D>captcha.getContext('2d');
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

  }
}

export const getSymbol = () => {

 const count=() => {
    return 1;
  }
}

