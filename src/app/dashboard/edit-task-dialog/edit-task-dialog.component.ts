import {Component, Input, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Task} from '../../_classes/Task';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.sass']
})
export class EditTaskDialogComponent implements OnInit {

  task: Task;
  list: Array<Task>;

  // Create Issue Form
  public editTaskForm: FormGroup;
  private title: FormControl;
  private type: FormControl;
  private deadline: FormControl;
  private description: FormControl;

  taskTypes = [
    {value: 'Important'},
    {value: 'Normal'},
    {value: 'Trivial'}
  ];

  constructor(public dialogRef: MdDialogRef<EditTaskDialogComponent>, private _dashboardService: DashboardService) { }

  private createFormControls(): void {
    this.title = new FormControl('', Validators.required);
    this.type = new FormControl();
    this.deadline = new FormControl();
    this.description = new FormControl();
  }

  private createForm(): void {
    this.editTaskForm = new FormGroup({
      title: this.title,
      type: this.type,
      deadline: this.deadline,
      description: this.description,
    });
  }

  updateTask(): void {
    this.task.title = this.title.value;
    this.task.type = this.type.value;
    this.task.description = this.description.value;
    this.task.deadline = this.deadline.value;
    this.task.color = this._dashboardService.adjustTaskColor(this.task.type);
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
    console.log(this.list);
  }
}
