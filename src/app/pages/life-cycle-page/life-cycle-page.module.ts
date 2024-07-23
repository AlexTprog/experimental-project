import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCyclePageComponent } from './life-cycle-page.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LifeCyclePageComponent, ItemComponent],
  imports: [CommonModule, FormsModule],
})
export class LifeCyclePageModule {}
