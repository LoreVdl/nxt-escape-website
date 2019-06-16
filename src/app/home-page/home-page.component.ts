import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface Image { id: string; imagePath: string; imageURL: string; imageName: string; maintTs: number; }

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  private images; 

  constructor(private storage: AngularFireStorage, private fireStore: AngularFirestore) { }

  ngOnInit() {
    this.loadImages(); 
  }

  loadImages() {
    this.images = this.storage.ref("/image/11:58-Bzbx7HGtxU").getDownloadURL();
  }

}
