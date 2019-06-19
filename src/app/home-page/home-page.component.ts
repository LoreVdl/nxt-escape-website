import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';

export interface Image { id: string; name: string; }

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  private imagesNames: Image[]; 
  public images = []; 
  private imagesTime = []; 

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
      let minutes = +(this.imagesNames[i].name.substring(0, 2)); 
      let seconds = +(this.imagesNames[i].name.substring(3, 5)); 
      let milliseconds = (minutes * 60) + (seconds); 

      milliseconds = 3600 - milliseconds; 

      let time = moment.utc(milliseconds*1000).format("mm:ss");
      this.images.push({name: this.storage.ref("/image/" + this.imagesNames[i].name).getDownloadURL(), time: time});
    }
  }

  pause() {
    let video = <HTMLVideoElement>document.getElementById("video");
    let btn = document.getElementById("pauseBtn");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  
}