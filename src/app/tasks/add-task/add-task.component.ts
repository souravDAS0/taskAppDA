import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  task: Task = {
    _id: '',
    title: '',
    description: '',
    dueDate: '',
    isComplete: false,
  };
  constructor(private router: Router, private tasksService: TasksService) {}

  onSubmit() {
    console.log(this.task);
    if (this.task.title) {
      this.tasksService.addTasks(this.task).subscribe((value) => {
        console.log(`${this.task} added successfully!!`);
        this.router.navigate(['/']);
      });
    }
  }
}
