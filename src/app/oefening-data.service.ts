import { Injectable } from '@angular/core';
import { Oefening } from './oefening/oefening.model';
import { Observable } from 'rxjs/Observable';
import { Feedback } from './feedback/feedback.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { v4 as uuid } from 'uuid'

@Injectable()
export class OefeningDataService {
  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  getOefeningen(): Observable<Oefening[]> {
    return this.afs.collection<Oefening>("Oefening").valueChanges()
  }

  getOefeningenFromSessie(sessieId: string): Observable<Oefening[]> {
    return this.afs.collection<Oefening>('Oefening', oef => oef.where('sessieId', '==', sessieId)).valueChanges()
  }

  getOefening(oefeningId: string): Observable<Oefening> {
    return this.afs.collection("Oefening").doc<Oefening>(oefeningId).valueChanges()
  }

  voegNieuweOefeningToe(oefening: Oefening): void {
    let id = uuid();
    let id2 = uuid();

    oefening.oefeningId = id;
    console.log(oefening)
    let ref = this.storage.ref(id2)
    ref.put(oefening.file).then(() => {
      ref.getDownloadURL().subscribe(b => {
        oefening.url = b
        this.afs.collection("Oefening").doc(id).set(oefening.toJSON());
      });
    }
    )
  }

  verwijderOefening(oefening: Oefening) {
    this.afs.collection("Oefening").doc(oefening.oefeningId).delete()

  }

  updateOefening(oefening: Oefening) {
    this.afs.collection("Oefening").doc(oefening.oefeningId).set(oefening.toJSON())
  }

  getFeedbackFromOefening(oefeningId: string): Observable<Feedback[]> {
    console.log('feedback', oefeningId)
    return this.afs.collection<Feedback>('Feedback', oef => oef.where('oefeningId', '==', oefeningId)).valueChanges()
  }

  verwijderFeedbackOefening(oefeningId: string) {
    this.afs.collection<Feedback>('Feedback', oef => oef.where('oefeningId', '==', oefeningId)).stateChanges().subscribe(a => {
      a.forEach(a => {
        this.afs.collection<Feedback>('Feedback').doc(a.payload.doc.id).delete()
      })
    })
  }
}
