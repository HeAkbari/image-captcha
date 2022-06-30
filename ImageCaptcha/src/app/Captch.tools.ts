
const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const getCharacter = () => {
    const arr = [];
    arr.push(getRandomInt(97, 122));
    arr.push(getRandomInt(65, 90));
    arr.push(getRandomInt(48, 57));
    const value = arr[getRandomInt(0, arr.length)];
    return String.fromCharCode(value);
};
const getWord = (length:number) => {
    let newWord = ``;
    let count = 0;
    while (count < length) {
        newWord += getCharacter();
        count++;
    }
    return newWord;
};
export const createcaptchaObject = (font: string, align: CanvasTextAlign, baseline: CanvasTextBaseline, width: number, height: number, bgColor: string, color: string, length: number) => {
    const captcha = document.createElement('canvas');
    const newImage = document.createElement('image');
    const newWord = getWord(length);
    const context = <CanvasRenderingContext2D>captcha.getContext('2d');
    context.canvas.width = width;
    context.canvas.height = height;
    context.font = font;
    context.textAlign = align;
    context.textBaseline = baseline;
    context.fillStyle = bgColor;

    var background = new Image();
    background.src = "https://s6.uupload.ir/files/r_dmte.jpg";
    
    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function(){
        context.drawImage(background,0,0);   
        context.fillRect(0, 0, width, height);
        context.fillStyle = color;
        context.fillText(newWord, width / 2, height / 2);
    }


    return { canvas: context.canvas, word: newWord };

    newImage.setAttribute('src', context.canvas.toDataURL());
    newImage.setAttribute('data-key', newWord);
    return newImage.outerHTML;

}
