import {Component, OnInit} from '@angular/core';
import {Task} from '../_classes/Task';

@Component({
  selector: 'app-simple-dnd',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {



  listBoxers: Array<Task>;
  listTeamOne: Array<Task>;
  listTeamTwo: Array<Task>;

  constructor() {
  }


  ngOnInit() {
    this.listBoxers = [];
    this.listTeamOne = [];
    this.listTeamTwo = [];

    this.listBoxers.push(new Task('Task 1', 'Description 1', new Date('11-12-2012')));
    this.listBoxers.push(new Task('Task 2', 'Description 2', new Date('12-12-2012')));

    this.listTeamOne.push(new Task('Task 3', 'Description 3', new Date('11-12-2012')));
    this.listTeamOne.push(new Task('Task 2', 'Description 2', new Date('12-12-2012')));

  }

}

