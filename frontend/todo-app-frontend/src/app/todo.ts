import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoItem } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class Todo {
  private base = '/api'; 
  private todos$ = new BehaviorSubject<TodoItem[]>([]);

  constructor(private http: HttpClient) {}

  fetchTodos(): void {
    this.http.get<TodoItem[]>(`${this.base}/todo`)
      .subscribe(items => this.todos$.next(items));
  }

  getTodos(): Observable<TodoItem[]> {
    return this.todos$.asObservable();
  }

  addTodo(task: string): void {
    this.http.post<TodoItem>(`${this.base}/todo`, { task })
      .subscribe(item => {
        this.todos$.next([...this.todos$.value, item]);
      });
  }

  deleteTodo(id: number): void {
    this.http.delete<void>(`${this.base}/todo/${id}`)
      .subscribe(() => {
        this.todos$.next(this.todos$.value.filter(t => t.id !== id));
      });
  }
}
