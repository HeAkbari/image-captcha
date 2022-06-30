import { Component, OnInit } from '@angular/core';
import { CaptchaService } from './captcha.service';

//declare function createCaptcha(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private captcha: CaptchaService) {

  }
  ngOnInit(): void {
    this.createCaptcha()
  }
  createCaptcha() {
    const captcha: any = this.captcha.createcaptchaObject(
      '35px Arial',
      'center',
      'middle',
      300,
      150,
      'transparent',
      '#B885',
      6
    )
    var body = document.getElementById("main");
    body?.appendChild(captcha.canvas);
    console.log(captcha.word)
  }
}


