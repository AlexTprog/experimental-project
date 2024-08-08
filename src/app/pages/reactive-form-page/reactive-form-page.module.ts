import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormPageComponent } from './reactive-form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FormBodyComponent } from './components/form-body/form-body.component';

@NgModule({
  declarations: [
    ReactiveFormPageComponent,
    ListItemsComponent,
    FormBodyComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ReactiveFormPageModule {}
