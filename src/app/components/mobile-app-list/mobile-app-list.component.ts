import { Component } from '@angular/core';
import {MobileAppService} from "../../services/mobile-app-list.service";

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
  appName: string = '';
  searchTerm: string = '';

  constructor(private mobileAppService: MobileAppService) {}

  get appList() {
    return this.mobileAppService.getAppList();
  }

  addApp() {
    this.mobileAppService.addApp(this.appName);
    this.appName = '';
  }

  removeApp(app: string) {
    this.mobileAppService.removeApp(app);
  }

  clearAll() {
    this.mobileAppService.clearAll();
  }

  filteredApps() {
    return this.mobileAppService.searchApp(this.searchTerm);
  }
}
