import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { Router } from '@angular/router';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private router: Router, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.list();
  }

  deleteTask(id: string) {
    this.tasksService.deleteTask(id).subscribe((value) => {
      if (value) {
        this.list();
      }
    });
  }

  updateTask(task: Task) {
    this.tasksService.updateTask(task).subscribe((value) => {
      console.log(`${task} updated successfully!!`);
    });
  }

  list() {
    this.tasksService.getTasks().subscribe((value) => {
      this.tasks = value;
    });
  }
}
