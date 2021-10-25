import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksSearchComponent} from './books-search.component';
import {FormsModule} from "@angular/forms";
import {BookTableModule} from "./presenter/book-table/book-table.module";
import {BookSearchFormModule} from "./presenter/book-search-form/book-search-form.module";
import {ToolbarModule} from "../toolbar/toolbar.module";

@NgModule({
  declarations: [
    BooksSearchComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        BookTableModule,
        BookSearchFormModule,
        ToolbarModule,
    ],
  exports: [
    BooksSearchComponent,
  ]
})
export class BooksSearchModule {
}
