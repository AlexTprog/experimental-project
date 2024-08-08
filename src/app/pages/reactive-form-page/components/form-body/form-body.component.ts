import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Anime } from '../../interfaces/anime';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AnimeForm } from '../../interfaces/anime.form';

@Component({
  selector: 'reactive-form-body',
  templateUrl: './form-body.component.html',
  styleUrl: './form-body.component.css',
})
export class FormBodyComponent implements OnInit, OnChanges {
  animeForm?: FormGroup;

  @Input() animeCurrent?: Anime;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['animeCurrent'] && this.animeForm && this.animeCurrent) {
      this.animeForm?.patchValue(this.animeCurrent);
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    const anime = new AnimeForm();
    this.animeForm = new FormGroup(anime);
  }

  onSubmit(event: any) {
    console.log(this.animeForm?.value, event);
  }
}
