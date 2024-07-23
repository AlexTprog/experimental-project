import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'cycle-item',
  template: `
    <div class="bg-danger text-white radius">
      <input type="text" class="form-control" [(ngModel)]="message" />
    </div>
  `,
  styles: `
  .radius{
    border-radius:8px;
  }
  `,
})
export class ItemComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() message: string = '';

  @Output() onChangeCycle = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    let changesString = 'ngOnChanges: ';
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        changesString += `${propName}: currentValue = ${change.currentValue}, previousValue = ${change.previousValue}; `;
      }
    }
    this.onChangeCycle.emit(changesString);
  }
  ngOnInit(): void {
    this.onChangeCycle.emit('ngOninit');
  }
  ngDoCheck(): void {
    this.onChangeCycle.emit('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    this.onChangeCycle.emit('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.onChangeCycle.emit('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    this.onChangeCycle.emit('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.onChangeCycle.emit('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.onChangeCycle.emit('ngOnDestroy');
  }
}
