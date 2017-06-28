import {Component, OnInit} from '@angular/core';
import {Task} from '../_classes/Task';
import {MdDialog} from '@angular/material';
import {AddTaskDialogComponent} from './add-task-dialog/add-task-dialog.component';
import {MdSnackBar} from '@angular/material';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-simple-dnd',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  todoList: Array<Task>;
  inProgressList: Array<Task>;
  doneList: Array<Task>;

  constructor(public dialog: MdDialog, public snackBar: MdSnackBar, private _dashboardService: DashboardService) {
  }

  private initLists(): void {
    this.todoList = this._dashboardService.todoList;
    this.inProgressList = this._dashboardService.inProgressList;
    this.doneList = this._dashboardService.doneList;
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addTask(result);
      }
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

  addTask(task: Task): void {
    this._dashboardService.addTask(task);
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

