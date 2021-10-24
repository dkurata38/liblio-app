import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksSearchComponent} from './books-search.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {BookTableModule} from "./presenter/book-table/book-table.module";

@NgModule({
  declarations: [
    BooksSearchComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    BookTableModule,
  ],
  exports: [
    BooksSearchComponent,
  ]
})
export class BooksSearchModule {
}
