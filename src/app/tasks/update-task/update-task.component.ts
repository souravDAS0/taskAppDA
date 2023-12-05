import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss'],
})
export class UpdateTaskComponent implements OnInit {
  task!: Task;
  constructor(
    private taskService: TasksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let taskId = this.activatedRoute.snapshot.paramMap.get('id');
    taskId &&
      this.taskService.getTaskById(taskId).subscribe((data) => {
        this.task = data;
        console.log(this.task);
      });
  }

  onUpdate() {
    this.taskService.updateTask(this.task).subscribe((value) => {
      console.log(`${this.task} updated successfully!!`);

      this.router.navigate(['/']);
    });
  }
}
