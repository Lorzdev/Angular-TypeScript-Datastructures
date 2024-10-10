import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageList: string[] = [
    'JavaScript',
    'Python',
    'Java',
    'TypeScript'
  ];

  getLanguages() {
    return this.languageList;
  }

  addLanguage(language: string) {
    this.languageList.push(language);
  }

  removeLanguage(language: string) {
    const index = this.languageList.indexOf(language);
    if (index > -1) {
      this.languageList.splice(index, 1);
    }
  }

  clearAllLanguages() {
    this.languageList = [];
  }
}
