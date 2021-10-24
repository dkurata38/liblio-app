import {Component, OnInit} from '@angular/core';
import {Book} from "./books-search.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.sass']
})
export class BooksSearchComponent implements OnInit {

  searchForm: FormGroup;

  books$!: Observable<Book[]>;

  constructor(private readonly formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      keyword: ''
    });
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
}
