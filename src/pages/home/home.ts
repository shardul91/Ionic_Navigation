import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyPage} from "../my/my";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  //template: `<button ion-button [navPush]="pushPage" [navParams]="params">Go</button>`
})


export class HomePage {
  mypage = MyPage;
  params: Object;
  pushPage: any;
  constructor(public navCtrl: NavController) {
    this.pushPage = 'myPage';
    this.params = {pageNo: 2};
  }
  PushFunc(){
    this.navCtrl.push(this.mypage);
  }

}

