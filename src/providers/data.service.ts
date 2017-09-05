import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class DataService {

  datos: FirebaseListObservable<any>;

  constructor(
    public fireDatabase: AngularFireDatabase
    ) {
    this.datos = this.fireDatabase.list('/datos');
    
  }
  getAll(){
    return this.datos;
  }

  create(dato){
    this.datos.push(dato);
  }

}
