import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksSearchComponent} from './books-search.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";
import {BookTableModule} from "./presenter/book-table/book-table.module";
import {BookSearchFormModule} from "./presenter/book-search-form/book-search-form.module";

@NgModule({
  declarations: [
    BooksSearchComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FormsModule,
    BookTableModule,
    BookSearchFormModule,
  ],
  exports: [
    BooksSearchComponent,
  ]
})
export class BooksSearchModule {
}
