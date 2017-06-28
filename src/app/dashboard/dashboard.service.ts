/**
 * Created by pawel.idziak on 27.06.2017.
 */
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Task} from '../_classes/Task';
import {ListsEnum} from '../_classes/ListsEnum';

@Injectable()
export class DashboardService {

  private _todoList: Array<Task>;
  private _inProgressList: Array<Task>;
  private _doneList: Array<Task>;
  private _listsEnum;

  constructor() {
    this.initLists();
    this.filterLists(JSON.parse(localStorage.getItem('tasks')));
  }

  private initLists(): void {
    this.todoList = [];
    this.inProgressList = [];
    this.doneList = [];
    this._listsEnum = ListsEnum;
  }

  addTask(title: string, type: string, deadline: Date, description: string): void {
    const color = this.adjustTaskColor(type);
    const task = new Task(title, type, color, description, deadline);
    this._todoList.push(task);
  }
  
  // method stores lists with all tasks in local storage
  saveTasks(): void {
    const allLists = [
      {name: ListsEnum.TODO,        list: this._todoList},
      {name: ListsEnum.INPROGRESS,  list: this._inProgressList},
      {name: ListsEnum.DONE,        list: this._doneList}
    ];
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(allLists));
  }

  removeTasks(): void {
    localStorage.removeItem('tasks');
    this.todoList.length = 0;
    this.inProgressList.length = 0;
    this.doneList.length = 0;
  }

  adjustTaskColor(value: string): string {
    switch (value) {
      case 'Important':
        return '#F44336';
      case 'Normal':
        return '#1976D2';
      case 'Trivial':
        return '#8BC34A';
    }
  }

  private filterLists(lists: any[]) {
    if (lists) {
      for (const list of lists) {
        switch (list.name) {
          case ListsEnum.TODO:
            for (const task of list.list) {
              this.todoList.push(new Task(task._title, task._type, task._color, task._description, task._deadline));
            }
            break;

          case ListsEnum.INPROGRESS:
            for (const task of list.list) {
              this.inProgressList.push(new Task(task._title, task._type, task._color, task._description, task._deadline));
            }
            break;

          case ListsEnum.DONE:
            for (const task of list.list) {
              this.doneList.push(new Task(task._title, task._type, task._color, task._description, task._deadline));
            }
            break;
        }
      }
    }
  }

  get todoList(): Array<Task> {
    return this._todoList;
  }

  set todoList(value: Array<Task>) {
    this._todoList = value;
  }

  get inProgressList(): Array<Task> {
    return this._inProgressList;
  }

  set inProgressList(value: Array<Task>) {
    this._inProgressList = value;
  }

  get doneList(): Array<Task> {
    return this._doneList;
  }

  set doneList(value: Array<Task>) {
    this._doneList = value;
  }
}
