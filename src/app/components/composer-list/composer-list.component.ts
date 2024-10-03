import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})

export class ComposerListComponent {
  composerName: string = '';

  composerList: string[] = [
    'Skusta Clee',
    'Flow G',
    'Justine Bieber',
    'Bruno Mars',
  ];

  addComposer() {
    if (this.composerName.trim()) {
      this.composerList.push(this.composerName.trim());
      this.composerName = '';
    } else {
      console.log('Please enter a composer name.');
    }
  }

  removeComposer(composer: string) {
    const index = this.composerList.indexOf(composer);
    if (index > -1) {
      this.composerList.splice(index, 1);
    }
  }
}
