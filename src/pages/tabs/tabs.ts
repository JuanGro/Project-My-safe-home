import { Component } from '@angular/core';

import { ConfigurationPage } from '../configuration/configuration';
import { FamilyPage } from '../family/family';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotificationsPage;
  tab2Root = FamilyPage;
  tab3Root = ConfigurationPage;

  constructor() {

  }
}
