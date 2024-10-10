import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  private composerList: string[] = [
    'Skusta Clee',
    'Flow G',
    'Justin Bieber',
    'Bruno Mars',
  ];

  addComposer(composer: string) {
    if (composer.trim()) {
      this.composerList.push(composer.trim());
    }
  }

  removeComposer(composer: string) {
    const index = this.composerList.indexOf(composer);
    if (index > -1) {
      this.composerList.splice(index, 1);
    }
  }

  clearAll() {
    this.composerList = [];
  }

  getComposerList(): string[] {
    return this.composerList;
  }

  searchComposer(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.composerList;
    }
    return this.composerList.filter(composer =>
      composer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
