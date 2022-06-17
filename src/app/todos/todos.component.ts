import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos= [
      {
        sno:3,
        title:"this is title",
        desc: "Description",
        active: true
      },
      {
        sno:4,
        title:"this is title 1",
        desc: "Description 1",
        active: true
      },
      {
        sno:5,
        title:"this is title 2",
        desc: "Description 2",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }
  addTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.push(todo);
  }
}
