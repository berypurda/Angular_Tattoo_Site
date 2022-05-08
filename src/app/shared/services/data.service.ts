import { Injectable } from "@angular/core"
import { AngularFirestore } from "@angular/fire/compat/firestore"

@Injectable({
  providedIn: "root",
})
export class DataService {
  collectionName = "Dates"

  constructor(private afs: AngularFirestore) {}

  create(date: number) {
    return this.afs.collection<number>(this.collectionName).add(date)
  }

  getAll() {
    return this.afs.collection<number>(this.collectionName).valueChanges()
  }

  delete(id: string) {
    return this.afs.collection<number>(this.collectionName).doc(id).delete()
  }
}

