import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() index!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick = (todo: Todo): void => {
    this.todoDelete.emit(this.todo);
  };

  onCheckboxClick = (todo: Todo): void => {
    this.todoCheckBox.emit(this.todo);
  };
}
