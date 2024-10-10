import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MobileAppService {
  private appList: string[] = [
    'Facebook',
    'Spotify',
    'YouTube',
    'TikTok',
  ];

  addApp(app: string) {
    if (app.trim()) {
      this.appList.push(app.trim());
    }
  }

  removeApp(app: string) {
    const index = this.appList.indexOf(app);
    if (index > -1) {
      this.appList.splice(index, 1);
    }
  }

  clearAll() {
    this.appList = [];
  }

  getAppList(): string[] {
    return this.appList;
  }

  searchApp(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.appList;
    }
    return this.appList.filter(app =>
      app.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
