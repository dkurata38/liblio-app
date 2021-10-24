import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookSearchFormValue} from "./book-search-form.model";

@Component({
  selector: 'app-book-search-form',
  templateUrl: './book-search-form.component.html',
  styleUrls: ['./book-search-form.component.sass']
})
export class BookSearchFormComponent implements OnInit {
  searchForm: FormGroup;

  @Input()
  value: BookSearchFormValue = {
    keyword: ''
  }

  @Output()
  submitted: EventEmitter<BookSearchFormValue> = new EventEmitter<BookSearchFormValue>();

  constructor(private readonly formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      keyword: ''
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.submitted.emit({
      keyword: this.searchForm.get('keyword')?.value
    });
  }
}
