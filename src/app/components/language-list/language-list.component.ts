import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {

  languageName: string = '';
  languageList: string[] = [];

  addLanguage() {
    if (this.languageName.trim()) {
      this.languageList.push(this.languageName.trim());
      this.languageName = '';
    } else {
      console.log('Please enter a language name.');
    }
  }

  removeLanguage(language: string) {
    const index = this.languageList.indexOf(language);
    if (index > -1) {
      this.languageList.splice(index, 1);
    }
  }
}
