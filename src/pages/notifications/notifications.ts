import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

// Models
import { Item } from './../../models/item.model';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
  public items: Item[];

  constructor(
    public navCtrl: NavController,
    public httpService: HttpService
  ) {}

  ionViewDidLoad() {
    this.items = [];
    this.getList();
  }

  getList() {
    this.httpService.get('http://104.236.109.213/items').subscribe(dataReceived => {
      if (dataReceived) {
        for (let item of dataReceived) {
          this.items.push(new Item(item));
        }
      } else {
        // console.log('error');
      }
    })
  }
}
