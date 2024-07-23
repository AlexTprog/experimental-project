import { Component } from '@angular/core';

@Component({
  templateUrl: './life-cycle-page.component.html',
  styleUrl: './life-cycle-page.component.css',
})
export class LifeCyclePageComponent {
  statusMessage: string[] = [];
  listMessages: string[] = [];

  constructor() {}

  onAddMessage(input: HTMLInputElement) {
    this.listMessages.push(input.value ?? '');
    input.value = '';
  }

  onDelete(index: number) {
    this.listMessages.splice(index, 1);
  }

  onClearHistory() {
    this.statusMessage = [];
  }

  fillStatusMessage(msg: string) {
    this.statusMessage.push(msg);
  }
}
