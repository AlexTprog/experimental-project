import { FormControl, FormGroup, FormArray } from '@angular/forms';

export class AnimeForm {
  id = new FormControl<number | null>(null);
  name = new FormControl<string>('');
  shortName = new FormControl<string>('');
  categories = new FormControl<number[]>([]);
  emision = new FormGroup({
    start: new FormControl<string>(''),
    end: new FormControl<string>(''),
  });
  image = new FormControl<string>('');
  rating = new FormControl<number>(0);
  votes = new FormControl<number>(0);
  description = new FormControl<string>('');
  episodes = new FormControl<number>(0);
  studio = new FormGroup({
    name: new FormControl<string>(''),
    location: new FormControl<string>(''),
  });
  characters = new FormArray([]);
  themes = new FormControl<string[]>([]);
}

export class CharacterForm {
  id = new FormControl<number | null>(null);
  name = new FormControl<string>('');
  role = new FormControl<string>('');
  voiceActor = new FormGroup({
    name: new FormControl<string>(''),
    age: new FormControl<number | null>(null),
    nationality: new FormControl<string>(''),
  });
}
