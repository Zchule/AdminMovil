import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-adm-super',
  templateUrl: 'adm-super.html',
})
export class AdmSuperPage {
 
  constructor(
    public navCtrl: NavController, 
    public menuCtrl: MenuController

  ) {
  }

  ionViewDidLoad() {
    console.log("AdminUser");
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'menuAdmin');
  }  
  
}