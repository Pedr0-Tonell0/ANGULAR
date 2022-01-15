import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() title: string = '';
  @Output() onValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void
  {
    this.onValue.emit('Book value')
  }
}
