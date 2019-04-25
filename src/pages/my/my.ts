import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'myPage'
})
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  pageNo=null;

  constructor(public navCtrl: NavController, public navParams:NavParams){
    this.pageNo=this.navParams.get('pageNo');
  }

  goBack() {
    this.navCtrl.pop();
  }

}


