import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
  appName: string = '';

  appList: string[] = [
    'Facebook',
    'Instagram',
    'Spotify',
    'YouTube',
    'TikTok',
  ];

  addApp() {
    if (this.appName.trim()) {
      this.appList.push(this.appName.trim());
      this.appName = '';
    } else {
      console.log('Please enter an app name.');
    }
  }

  removeApp(app: string) {
    const index = this.appList.indexOf(app);
    if (index > -1) {
      this.appList.splice(index, 1);
    }
  }
}
