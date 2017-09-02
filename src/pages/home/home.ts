import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, AlertController, LoadingController, MenuController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm: FormGroup;
  
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public formBuilder: FormBuilder,
      public alertCtrl: AlertController, 
      public loadingCtrl: LoadingController,
      public menuCtrl: MenuController
    ) {
      this.loginForm = this.makeLoginForm();
    }

    ionViewDidEnter() {
      this.menuCtrl.enable(false, 'menuAdmin');
    }
    
    doLogin( event: Event ){
      event.preventDefault();
  
      let load = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      load.present();
      let usuario = this.loginForm.value.usuario;
      let password = this.loginForm.value.password;
      if(usuario == "admin" && password == "123456"){
        this.navCtrl.setRoot("AdmSuperPage");
      }
      
    }
  
    private makeLoginForm(){
      return this.formBuilder.group({
        usuario: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
  }
