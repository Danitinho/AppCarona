import { Component, Sanitizer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName, ContactFieldType, IContactFindOptions} from '@ionic-native/contacts';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  phoneContacts: ContactFieldType[] = ["displayName"];
  contactsFound = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {
    this.search('');
  }
  search(q) {
    const option: IContactFindOptions = {
      filter:q
    }
    this.contacts.find(this.phoneContacts, option).then(conts => {
      this.contactsFound = conts;
    })
  }
  onKeyUp(ev) {
    this.search(ev.target.value)
  }
  ionViewDidLoad() {
  }
}

