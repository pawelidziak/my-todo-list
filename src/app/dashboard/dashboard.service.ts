/**
 * Created by pawel.idziak on 27.06.2017.
 */
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Task} from '../_classes/Task';

@Injectable()
export class DashboardService {

  private _todoList: Array<Task>;
  private _inProgressList: Array<Task>;
  private _doneList: Array<Task>;

  constructor() {
    this.initLists();
    this.filterLists(JSON.parse(localStorage.getItem('tasks')));
  }

  private initLists(): void {
    this._todoList = [];
    this._inProgressList = [];
    this._doneList = [];
  }

  addTask(task: Task): void {
    this._todoList.push(task);
  }

  // method stores lists with all tasks in local storage
  saveTasks(): void {
    const allLists = [
      {name: 'todo', list: this._todoList},
      {name: 'inProgress', list: this._inProgressList},
      {name: 'done', list: this._doneList}
    ];
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(allLists));
  }

  removeTasks(): void {
    localStorage.removeItem('tasks');
    this.initLists();
  }

  private filterLists(lists: any[]) {
    if (lists) {
      for (const list of lists) {
        switch (list.name) {
          case 'todo':
            for (const task of list.list) {
              this._todoList.push(new Task(task._title, task._type, task._color, task._description, task._deadline));
            }
            break;

          case 'inProgress':
            for (const task of list.list) {
              this._inProgressList.push(new Task(task._title, task._type, task._color, task._description, task._deadline));
            }
            break;

          case 'done':
            for (const task of list.list) {
              this._doneList.push(new Task(task._title, task._type, task._color, task._description, task._deadline));
            }
            break;
        }
      }
    }
  }

  get todoList(): Array<Task> {
    return this._todoList;
  }

  get inProgressList(): Array<Task> {
    return this._inProgressList;
  }

  get doneList(): Array<Task> {
    return this._doneList;
  }
}
