import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: string| null;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos=[];
    }
    else{
      this.todos= JSON.parse(this.localItem);
    }
  /*   this.todos= [
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
    ]*/
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
