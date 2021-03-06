import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../_classes/Task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Input('item') item: Task;
  @Input('sortBy') sortBy: number;

  constructor() { }

  ngOnInit() {
  }

}
