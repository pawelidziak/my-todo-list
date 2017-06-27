import {Component, OnInit} from '@angular/core';
import {Task} from '../_classes/Task';
import {MdDialog} from '@angular/material';
import {AddTaskDialogComponent} from './add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-simple-dnd',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  todoList: Array<Task>;
  inProgressList: Array<Task>;
  doneList: Array<Task>;

  constructor(public dialog: MdDialog) {
  }

  private initLists(): void {
    this.todoList = [];
    this.inProgressList = [];
    this.doneList = [];
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addTask(result);
      }
    });
  }

  addTask(task: Task): void {
    this.todoList.push(task);
    console.log(this.todoList);
  }

  // method stores lists with all tasks in local storage
  saveTasks(): void {
    const allLists = [
      {name: 'todo', list: this.todoList},
      {name: 'inProgress', list: this.inProgressList},
      {name: 'done', list: this.doneList}
    ];
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(allLists));
  }

  removeTasks(): void {
    localStorage.removeItem('tasks');
    this.initLists();
  }

  filterLists(lists: any[]) {
    if (lists) {
      for (const list of lists) {
        switch (list.name) {
          case 'todo':
            for (const task of list.list) {
              this.todoList.push(new Task(task._title, task._type, task._color, task._description, task._deadline));
            }
            break;

          case 'inProgress':
            for (const task of list.list) {
              this.inProgressList.push(new Task(task._title, task._type, task._color, task._description, task._deadline));
            }
            break;

          case 'done':
            for (const task of list.list) {
              this.doneList.push(new Task(task._title, task._type, task._color, task._description, task._deadline));
            }
            break;
        }
      }
    }
  }

  ngOnInit() {
    this.initLists();
    this.filterLists(JSON.parse(localStorage.getItem('tasks')));
  }
}

