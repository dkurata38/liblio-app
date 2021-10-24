import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Book} from "../../books-search.model";

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.sass']
})
export class BookTableComponent implements OnInit, OnChanges {

  @Input()
  books: Book[] | null = null;

  displayColumns = ['title', 'author', 'format', 'publishedOn']

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit(): void {
  }

  formatDate(date: Date): string {
    return date.toDateString();
  }

  getAuthor(book: Book): string {
    const authors = book.authors;
    const author = authors[0];
    return `${author.name}（${author.type}）`
  }
}
