import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { UsersPage } from '../users/users';
import { HomePage } from '../home/home';
import { UpdatesPage } from '../updates/updates';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UpdatesPage;
  tab3Root = UsersPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
