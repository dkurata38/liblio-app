import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {BooksSearchModule} from "./books-search/books-search.module";


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    BooksSearchModule,
  ]
})
export class PagesModule {
}
