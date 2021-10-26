import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {BooksSearchModule} from "./books-search/books-search.module";
import { PagesComponent } from './pages.component';
import {ToolbarModule} from "./toolbar/toolbar.module";
import {LoginModule} from "./login/login.module";


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    BooksSearchModule,
    LoginModule,
    ToolbarModule,
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule {
}
