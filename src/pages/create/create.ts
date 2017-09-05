import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';

import { DataService } from '../../providers/data.service';

import { Geolocation} from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  preventaForm: FormGroup;
  preventa: any= null;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataService: DataService,
    public geolocation: Geolocation
    ) {
      this.getPosition();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  savePreventa( event: Event ){
    event.preventDefault();
      let data = this.preventaForm.value; 
      this.dataService.create(data);
      let message = this.toastCtrl.create({
      message: 'Dato Registrado',
      duration: 3000,
      showCloseButton: true
    })
    message.present();
    this.close();
    this.preventaForm = this.makeForm();
  }
  getPosition(): any {
    let msn = "No Encontramos su ubicacion, revise su internet o su Gps";
    this.geolocation.getCurrentPosition().then((position) => {
    this.preventaForm.get('latitude').setValue(position.coords.latitude);
    this.preventaForm.get('longitude').setValue(position.coords.longitude);
    
  }).catch((error) => {
              let alert = this.alertCtrl.create({
               title: "ERROR GPS",
               message: msn,
               buttons: [
                 {
                   text: "Ok",
                   role: 'cancel'
                 }
               ]
             });
             alert.present();
    });
  }
  
  makeForm(){
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      apPat: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]]
    });
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
