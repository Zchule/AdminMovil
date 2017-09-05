import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { CreatePage } from '../pages/create/create';
import { PerfilPage } from '../pages/perfil/perfil';
import { PreventaPage } from '../pages/preventa/preventa';
import { AutoVentaPage } from '../pages/auto-venta/auto-venta';
import { InfoMapPage } from '../pages/info-map/info-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DataService } from '../providers/data.service';

const configFirebase ={
  apiKey: "AIzaSyCHkCq2n-zXmNHb5BpfrMKz6qSGBhUkSOw",
  authDomain: "dmimovil-f7e74.firebaseapp.com",
  databaseURL: "https://dmimovil-f7e74.firebaseio.com",
  projectId: "dmimovil-f7e74",
  storageBucket: "dmimovil-f7e74.appspot.com",
  messagingSenderId: "595861180440"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage,
    ListPage,
    PerfilPage,
    PreventaPage,
    AutoVentaPage,
    InfoMapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp( configFirebase ),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePage,
    ListPage,
    PerfilPage,
    PreventaPage,
    AutoVentaPage,
    InfoMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
