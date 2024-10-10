import { Component } from '@angular/core';
import {LanguageService} from "../../services/language-list.service";

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languageName: string = '';
  searchTerm: string = '';
  languageList: string[] = [];
  filteredLanguageList: string[] = [];

  constructor(private languageService: LanguageService) {
    this.languageList = this.languageService.getLanguages();
    this.filteredLanguageList = [...this.languageList];
  }

  addLanguage() {
    if (this.languageName.trim()) {
      this.languageService.addLanguage(this.languageName.trim());
      this.updateLanguageList();
      this.languageName = ''; // Clear the input field
    } else {
      console.log('Please enter a language name.');
    }
  }

  removeLanguage(language: string) {
    this.languageService.removeLanguage(language);
    this.updateLanguageList();
  }

  clearAll() {
    this.languageService.clearAllLanguages();
    this.updateLanguageList();
  }

  searchLanguages() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredLanguageList = this.languageList.filter(language =>
      language.toLowerCase().includes(searchLower)
    );
  }

  updateLanguageList() {
    this.languageList = this.languageService.getLanguages();
    this.searchLanguages();
  }
}
