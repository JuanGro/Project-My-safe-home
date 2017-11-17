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
  ) {
    this.getList();
  }

  getList() {
    this.httpService.get('http://127.0.0.1:5000/items').subscribe(dataReceived => {
      if (dataReceived) {
        this.items = dataReceived;
        console.log(this.items);
      } else {
        console.log('error');
      }
    })
  }
  
}
