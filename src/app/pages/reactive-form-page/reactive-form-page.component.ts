import { Component, OnInit } from '@angular/core';
import { Anime } from './interfaces/anime';
import { AnimesService } from './services/animes.service';

@Component({
  selector: 'app-reactive-form-page',
  templateUrl: './reactive-form-page.component.html',
  styleUrl: './reactive-form-page.component.css',
})
export class ReactiveFormPageComponent implements OnInit {
  animeArray: Anime[] = [];
  animeSelected?: Anime;

  constructor(private animeService: AnimesService) {}

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    this.animeService.getAll().subscribe({
      next: (response) => {
        this.animeArray = response;
      },
      complete: () => {},
      error: (err) => {
        throw Error(err);
      },
    });
  }

  onSelectAnime(anime: Anime) {
    this.animeSelected = anime;
  }
}
