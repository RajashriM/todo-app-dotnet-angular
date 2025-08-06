import { Component } from '@angular/core';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoList],
  template: `<app-todo-list></app-todo-list>`
})
export class AppComponent {}