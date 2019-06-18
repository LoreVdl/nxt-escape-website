import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Image { id: string; name: string; }

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  private imagesNames: Image[]; 
  private images = []; 

  constructor(private storage: AngularFireStorage, private database: AngularFirestore) { }

  ngOnInit() {
    this.database.collection("images").snapshotChanges().subscribe(data => {
      this.imagesNames = data.map(e => {
        return {
          id: e.payload.doc.id, 
          ...e.payload.doc.data()
        } as Image; 
      }); 
      this.loadImages();
    }); 
  }

  loadImages() {
    for (let i = 0; i < this.imagesNames.length; i++) {
      this.images.push(this.storage.ref("/image/" + this.imagesNames[i].name).getDownloadURL());
    }
  }

}