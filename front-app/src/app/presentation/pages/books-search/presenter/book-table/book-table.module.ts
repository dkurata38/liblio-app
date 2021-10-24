import {NgModule} from "@angular/core";
import {BookTableComponent} from "./book-table.component";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    BookTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    BookTableComponent,
  ]
})
export class BookTableModule {
}
