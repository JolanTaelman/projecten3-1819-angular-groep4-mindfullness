import { Injectable } from '@angular/core';
import { Sessie } from './sessie/sessie.model';

import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class SessieDataService {
  constructor(private afs: AngularFirestore) {}

  getSessies(): Observable<Sessie[]> {
    return this.afs.collection<Sessie>("Sessie").valueChanges()
    }

  getSessie(sessieId: string): Observable<Sessie> {
    return this.afs.collection("Sessie").doc<Sessie>(sessieId).valueChanges()
  }

  voegNieuweSessieToe(sessie: Sessie): void {
    console.log(sessie)
    let id = uuid();
    this.afs.collection("Sessie").doc(id).set({
      "beschrijving" : sessie.beschrijving,
      "naam" : sessie.naam,
      "sessieId": id,
    });
  }

  verwijderSessie(sessie: Sessie) {
    console.log(sessie)
    this.afs.collection("Sessie").doc(sessie.sessieId).delete()

  }

  updateSessie(sessie: Sessie) {
    this.afs.collection("Sessie").doc(sessie.sessieId).set({
      "beschrijving" : sessie.beschrijving,
      "naam" : sessie.naam,
      "sessieCode" : sessie.sessieCode,
      "sessieId" : sessie.sessieId,
    })

  }
}
