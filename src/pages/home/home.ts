import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from "../list/list"
import { CadastroPage } from '../cadastro/cadastro';
import { StatusPage } from '../status/status';
import { GeoLocationPage } from '../geo-location/geo-location';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToList() {
    this.navCtrl.push(ListPage);
  }
  goToRegister() {
    this.navCtrl.push(CadastroPage);
  }
  goToStatus() {
    this.navCtrl.push(StatusPage);
  }
  goToMap() {
    this.navCtrl.push(GeoLocationPage);
  }
}
