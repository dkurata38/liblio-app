import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookSearchFormComponent} from './book-search-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BookSearchFormComponent
  ],
  exports: [
    BookSearchFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class BookSearchFormModule {
}
