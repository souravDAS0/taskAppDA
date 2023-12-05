import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteEvent = new EventEmitter();
  @Output() checkedEvent = new EventEmitter();

  ngOnInit(): void {
    // console.log(this.task);
  }

  delete(id: string) {
    this.deleteEvent.emit(id);
  }

  updateCompletion(task: Task) {
    console.log('called');
    this.checkedEvent.emit(task);
  }
}
