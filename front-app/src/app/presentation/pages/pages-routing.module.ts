import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksSearchComponent} from "./books-search/books-search.component";

const routes: Routes = [
  {
    path: '',
    component: BooksSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
