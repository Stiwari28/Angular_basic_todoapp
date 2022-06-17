import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input() todo: Todo | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
