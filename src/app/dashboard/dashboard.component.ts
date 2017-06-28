import {Component, OnInit} from '@angular/core';
import {Task} from '../_classes/Task';
import {ListsEnum} from '../_classes/ListsEnum';

import {MdDialog} from '@angular/material';
import {AddTaskDialogComponent} from './add-task-dialog/add-task-dialog.component';
import {MdSnackBar} from '@angular/material';
import {DashboardService} from './dashboard.service';
import {EditTaskDialogComponent} from './edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'app-simple-dnd',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  todoList: Array<Task>;
  inProgressList: Array<Task>;
  doneList: Array<Task>;
  listsEnum = ListsEnum;

  constructor(public dialog: MdDialog, public snackBar: MdSnackBar, private _dashboardService: DashboardService) {
  }

  private initLists(): void {
    this.todoList = this._dashboardService.todoList;
    this.inProgressList = this._dashboardService.inProgressList;
    this.doneList = this._dashboardService.doneList;
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent);
    dialogRef.afterClosed().subscribe();
  }
  openEditTaskDialog(task: Task, list: Array<Task>): void {
    const dialogRef = this.dialog.open(EditTaskDialogComponent);
    dialogRef.componentInstance.task = task;
    dialogRef.componentInstance.list = list;
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  openSaveSnackBar() {
    this.saveTasks();
    this.snackBar.open('Task saved!', '', {
      duration: 2000,
    });
  }

  openRemoveSnackBar() {
    this.removeTasks();
    this.snackBar.open('Task removed!', '', {
      duration: 2000,
    });
  }


  saveTasks(): void {
    this._dashboardService.saveTasks();
  }

  removeTasks(): void {
    this._dashboardService.removeTasks();
  }

  ngOnInit() {
    this.initLists();
  }
}

