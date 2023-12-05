import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    AddTaskComponent,
    HeaderComponent,
    UpdateTaskComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, HttpClientModule],
  exports: [TasksComponent, TaskComponent, AddTaskComponent, HeaderComponent],
})
export class TasksModule {}
