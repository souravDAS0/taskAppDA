import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'update-task/:id', component: UpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
