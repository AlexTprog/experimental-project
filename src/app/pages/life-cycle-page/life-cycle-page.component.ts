import { Component } from '@angular/core';
import { Person } from './interfaces/person';

@Component({
  templateUrl: './life-cycle-page.component.html',
  styleUrl: './life-cycle-page.component.css',
})
export class LifeCyclePageComponent {
  statusMessage: string[] = [];
  listPersons: Person[] = [];

  constructor() {}

  onAddMessage(input: HTMLInputElement) {
    this.listPersons.push({ name: input.value ?? '', age: 30 });
    input.value = '';
  }

  onDelete(index: number) {
    this.listPersons.splice(index, 1);
  }

  onClearHistory() {
    this.statusMessage = [];
  }

  fillStatusMessage(msg: string) {
    this.statusMessage.push(msg);
  }

  onForceChange() {
    if (this.listPersons.length === 0) throw Error('list length is zero');
    this.listPersons[0] = {
      name: 'pablito',
      age: 88,
    };
  }
}
