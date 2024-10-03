import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})

export class ComposerListComponent {
  composerName: string = '';
  composerList: string[] = [];

  addComposer() {
    if (this.composerName.trim()) {
      this.composerList.push(this.composerName.trim());
      this.composerName = '';
    }
  }

  removeComposer(composer: string) {
    const index = this.composerList.indexOf(composer);
    if (index > -1) {
      this.composerList.splice(index, 1);
    }
  }
}
