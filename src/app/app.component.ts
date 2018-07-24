import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TermosPage } from '../pages/termos/termos';
import { GruposPage } from '../pages/grupos/grupos';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { HelpPage } from '../pages/help/help';
import { ExitPage } from '../pages/exit/exit';
import { ContactsPage } from '../pages/contacts/contacts';

interface IPage{
  title:string
  component:any
  icon:string
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages : IPage[] = [
    {title:'Inicio', component:HomePage, icon:"home"},{title:'Grupos', component:GruposPage, icon:"people"}, 
    {title:'Configurações', component:ConfiguracoesPage, icon:"settings"}, {title:'Termos de Uso', component:TermosPage, icon:"book"}, 
    {title:'Lista', component:ListPage, icon:"body"}, {title:"Ajuda", component:HelpPage, icon:"help-circle"}, {title:"Sair", component:ExitPage, icon:"exit"},
    {title:"Contatos", component:ContactsPage, icon:"contact"}
  ]

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page: IPage) {
    this.nav.setRoot(page.component);
  }
}

