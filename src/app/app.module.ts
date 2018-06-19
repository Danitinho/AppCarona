import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list'
import { TermosPage } from '../pages/termos/termos';
import { ContactsPage } from '../pages/contacts/contacts';
import { Contact, Contacts } from '@ionic-native/contacts';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { StatusPage } from '../pages/status/status';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TermosPage,
    ContactsPage,
    CadastroPage,
    StatusPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TermosPage,
    ContactsPage,
    CadastroPage,
    StatusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
