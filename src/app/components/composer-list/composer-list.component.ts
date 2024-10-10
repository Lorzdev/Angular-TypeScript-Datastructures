import { Component } from '@angular/core';
import {ComposerService} from "../../services/composer-list.service";

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})

export class ComposerListComponent {
  composerName: string = '';
  searchTerm: string = '';

  constructor(private composerService: ComposerService) {}

  get composerList() {
    return this.composerService.getComposerList();
  }

  addComposer() {
    this.composerService.addComposer(this.composerName);
    this.composerName = '';
  }

  removeComposer(composer: string) {
    this.composerService.removeComposer(composer);
  }

  clearAll() {
    this.composerService.clearAll();
  }

  filteredComposers() {
    return this.composerService.searchComposer(this.searchTerm);
  }
}
