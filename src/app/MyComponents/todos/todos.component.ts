import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: string | null;
  constructor() {
    this.localItem = localStorage.getItem('todos');

    if (!this.localItem) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {}

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  deleteTodo(todo: Todo): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
