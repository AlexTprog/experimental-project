import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Anime } from '../../interfaces/anime';

@Component({
  selector: 'reactive-list-items',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css',
})
export class ListItemsComponent implements OnChanges {
  @Input() animeArray: Anime[] = [];

  @Output() onSelectAnime = new EventEmitter<Anime>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.debug(changes);
  }

  onShowAnime(anime: Anime): void {
    this.onSelectAnime.emit(anime);
  }
}
