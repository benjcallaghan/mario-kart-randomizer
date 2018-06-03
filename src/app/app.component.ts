import { Component, ViewEncapsulation } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'mk-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Settings', url: '/settings', icon: 'settings' }
  ];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }
}
