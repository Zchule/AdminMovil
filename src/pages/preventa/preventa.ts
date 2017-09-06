import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController} from 'ionic-angular';

import { DataService } from '../../providers/data.service';

@IonicPage()
@Component({
  selector: 'page-preventa',
  templateUrl: 'preventa.html',
})
export class PreventaPage {

  preventasShow: any[] = [];

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private modalCtrl: ModalController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreventaPage');
    this.dataService.getAll();
  }
  search(event: any){
    console.log("Search");
  }
  addPreventa(){
    let modal = this.modalCtrl.create('CreatePage');
    modal.present();
  }
  goToMapPage(){
    console.log("mapa");
    this.navCtrl.push('InfoMapPage');
  }

}
