import { Component, OnInit } from '@angular/core';
import { createcaptchaObject } from './Captch.tools';
import { CaptchaService } from './captcha.service';

//declare function createCaptcha(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    this.createCaptcha()
  }
  createCaptcha() {
    const captcha: any = createcaptchaObject(
      '35px Arial',
      'center',
      'middle',
      200,
      50,
      'transparent',
      '#A729',
      6
    )
    var body = document.getElementById("main");
    body?.appendChild(captcha.canvas);
    console.log(captcha.word)
  }
}


