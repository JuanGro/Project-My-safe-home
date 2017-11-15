import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
  public list: any;

  constructor(
    public navCtrl: NavController,
    public httpService: HttpService
  ) {
    this.getList();
  }

  getList() {
    this.httpService.get('https://jsonplaceholder.typicode.com/posts/').subscribe(dataReceived => {
      if (dataReceived) {
        this.list = dataReceived;
      } else {
        console.log('error');
      }
    })
  }
  
}
