import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from "../../../environments/environment"
import { Image } from "../models/Image"
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { AngularFireStorage } from "@angular/fire/compat/storage"
import { Slide } from "../models/Slide"

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  // HTTP

  collectionName = "Tattoos"

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  loadImageMeta(): Observable<Array<Slide>> {
    // return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Image>>;
    return this.afs.collection<Slide>(this.collectionName).valueChanges()
  }

  loadImage(imageUrl: string) {
    // return this.http.get(environment.hostUrl + '/assets/' + imageUrl, {responseType: 'blob'});
    return this.storage.ref(imageUrl).getDownloadURL()
  }
}

