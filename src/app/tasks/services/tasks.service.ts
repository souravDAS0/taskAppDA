import { Injectable } from '@angular/core';
import { Task } from '../task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  url = `http://localhost:3000/tasks`;
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>(this.url);
  }

  getTaskById(id: string) {
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  addTasks(task: Task) {
    return this.http.post<Task>(this.url, task);
  }

  updateTask(task: Task) {
    return this.http.put<Task>(`${this.url}/${task._id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete<Task>(`${this.url}/${id}`);
  }
}
