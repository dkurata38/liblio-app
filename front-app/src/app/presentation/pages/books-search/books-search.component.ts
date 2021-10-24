import {Component, OnInit} from '@angular/core';
import {Book} from "./books-search.model";
import {Observable, of} from "rxjs";
import {BookSearchFormValue} from "./presenter/book-search-form/book-search-form.model";

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.sass']
})
export class BooksSearchComponent implements OnInit {

  books$!: Observable<Book[]>;

  value: BookSearchFormValue = {
    keyword: ''
  };

  constructor() {
  }

  ngOnInit(): void {
    this.books$ = of([{
      id: '1',
      title: '百合姫',
      format: '雑誌',
      authors: [{
        name: 'けーしん',
        type: '著'
      }],
      publishedOn: new Date(Date.parse('2021-10-14')),
    }]);
  }

  search(event: BookSearchFormValue): void {
    this.value = event;
  }
}
