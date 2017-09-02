import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions } from '@ionic-native/google-maps'; 

@IonicPage()
@Component({
  selector: 'page-adm-super',
  templateUrl: 'adm-super.html',
})
export class AdmSuperPage {

  map: GoogleMap;
  myPosition: any = {};
  markers: any[] = [
    {
      position:{
        latitude: -17.3666745,
        longitude: -66.2387878,
      },
      title:'Point 1',
      icon: 'www/assets/imgs/marker-green.png'
    },
    {
      position:{
        latitude: -17.3706884,
        longitude: -66.2397749,
      },
      title:'Point 2',
      icon: 'www/assets/imgs/marker-blue.png'
    },
    {
      position:{
        latitude: -17.391398,
        longitude: -66.2407904,
      },
      title:'Point 3',
      icon: 'www/assets/imgs/marker-green.png'
    },
    {
      position:{
        latitude: -17.3878887,
        longitude: -66.223664,
      },
      title:'Point 4',
      icon: 'www/assets/imgs/marker-blue.png'
    },
  ];
 
  constructor(
    public navCtrl: NavController, 
    public menuCtrl: MenuController,
    private geolocation: Geolocation,
    private googleMaps: GoogleMaps

  ) {
  }

  ionViewDidLoad() {

    this.getCurrentPosition();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'menuAdmin');
  }

  getCurrentPosition(){
    this.geolocation.getCurrentPosition()
    .then(position => {
      this.myPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      this.loadMap();
      console.log(this.myPosition);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  loadMap(){
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');

    this.map = this.googleMaps.create(element);

    // create CameraPosition
    let position: CameraPosition = {
      target: new LatLng(this.myPosition.latitude, this.myPosition.longitude),
      zoom: 12,
      tilt: 30
    };

    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      console.log('Map is ready!');

      // move the map's camera to position
      this.map.moveCamera(position);

      let markerOptions: MarkerOptions = {
        position: this.myPosition,
        title: "Hello"
      };

      this.addMarker(markerOptions);

      this.markers.forEach(marker=>{
        this.addMarker(marker);
      });
      
    });
  }



  addMarker(options){
    let markerOptions: MarkerOptions = {
      position: new LatLng(options.position.latitude, options.position.longitude),
      title: options.title
    };
    this.map.addMarker(markerOptions);
  }
  
  
}