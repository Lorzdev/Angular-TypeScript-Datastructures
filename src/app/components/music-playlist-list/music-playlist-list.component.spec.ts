import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlaylistListComponent } from './music-playlist-list.component';

describe('MusicPlaylistListComponent', () => {
  let component: MusicPlaylistListComponent;
  let fixture: ComponentFixture<MusicPlaylistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPlaylistListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicPlaylistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
