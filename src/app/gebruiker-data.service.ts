import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { _throw } from 'rxjs/observable/throw';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GebruikerDataService {

  constructor(private afs: AngularFirestore) {}

  getUsers(): Observable<any[]> {
    return this.afs.collection("Gebruikers").valueChanges()
  }

  getUserById(uid: string): Observable<any> {
    return this.afs.collection("Gebruikers").doc(uid).valueChanges()
  }

  updateUser(uid: string, user) {
    console.log(user);
    console.log(uid)
    this.afs.collection("Gebruikers").doc(uid).set({
      email: user.email,
      groepnr: user.groepnr,
      name: user.name,
      telnr: user.telnr,
      regio: user.regio,
      sessieid: user.sessieid,
      uid: uid,
    }
  )
  }

  
  removeUser(uid: string) {
    this.afs.collection("Gebruikers").doc(uid).delete()

  }
}
