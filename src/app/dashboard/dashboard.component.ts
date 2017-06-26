import {Component, OnInit} from '@angular/core';
import {Task} from '../_classes/Task';
import {MdDialog} from '@angular/material';
import {AddTaskDialogComponent} from './add-task-dialog/add-task-dialog.component';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-simple-dnd',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit{

  private allLists: Array<any>;
  todoList: Array<Task>;
  inProgressList: Array<Task>;
  doneList: Array<Task>;

  loading: boolean;
  isDataAvailable: boolean;
  constructor(public dialog: MdDialog, private _dashboardService: DashboardService) {


  }

  openAddTaskDialog() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addTask(result);
      }
    });
  }

  addTask(task: Task) {
    this.todoList.push(task);
    console.log(this.todoList);
  }

  // method stores lists with all tasks in local storage
  saveTasks() {
    const allLists = [
      {name: 'todo', value: this.todoList},
      {name: 'inProgress', value: this.inProgressList},
      {name: 'done', value: this.doneList}
    ];
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(this.todoList));
  }




  ngOnInit() {
    this.todoList = [];
    this.inProgressList = [];
    this.doneList = [];

    // const task = new Task('Name 1', 'Important', 'Description 1', new Date('11-12-2012'));
    // task.color = '#8BC34A';
    // this.todoList.push(task);
    //
    // task.title = 'Task 2';
    // task.color = '#1976D2';
    // this.todoList.push(task);
    //
    // task.title = 'Task 3';
    // task.color = '#F44336';
    // this.inProgressList.push(task);
    //
    // task.title = 'Task 3';
    // task.color = '#8BC34A';
    // this.inProgressList.push(task);

  }

}

