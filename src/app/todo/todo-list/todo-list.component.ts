import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  i = [
    {"num":"First"},
    {"num":"Second"},
    {"num":"Third"},
    {"num":"Fourth"}
];;
  constructor() { }

  ngOnInit(): void {
  }

}
