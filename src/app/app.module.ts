import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule, 
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCdNPVRvw6_VI5p0eFrTWl2upMmfJnU25I",
      authDomain: "nxt-escape-13bff.firebaseapp.com",
      storageBucket: "nxt-escape-13bff.appspot.com",
      projectId: "nxt-escape-13bff",
    }),
    AngularFireStorageModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
