import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: Todo[] = [
    { task: "Make the bed", completed: true },
    { task: "Feed Charlie", completed: true },
    { task: "Wash the dishes", completed: false },
    { task: "Cut the grass", completed: false },
    { task: "Resume", completed: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
