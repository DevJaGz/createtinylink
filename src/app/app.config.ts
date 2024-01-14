import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { DataModule } from './data/data.module';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"createtinylink","appId":"1:53059347819:web:b239b18c7cd0aa6f81d82e","storageBucket":"createtinylink.appspot.com","apiKey":"AIzaSyDu2XDVippo3vg8GfBpkEVqq6AH5yP9C5w","authDomain":"createtinylink.firebaseapp.com","messagingSenderId":"53059347819","measurementId":"G-DD6L0FEYK3"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())),
    importProvidersFrom(DataModule)
  ],

};
