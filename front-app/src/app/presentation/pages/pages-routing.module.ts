import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksSearchComponent} from "./books-search/books-search.component";
import {PagesComponent} from "./pages.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: BooksSearchComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
