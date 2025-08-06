import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { TodoItem } from '../models/todo';
import { Todo } from '../todo'; //todo service import

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList implements OnInit {
  todos$!: Observable<TodoItem[]>;
  newTask = '';
 constructor(private todoService: Todo) {}

 ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
    this.todoService.fetchTodos();
  }

  addTodo(): void {
    if (!this.newTask.trim()) return;
    this.todoService.addTodo(this.newTask.trim());
    this.newTask = '';
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  trackById(index: number, item: TodoItem) {
  return item.id;
  }
}
