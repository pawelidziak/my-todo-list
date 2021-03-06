import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.sass']
})
export class AddTaskDialogComponent implements OnInit {

  // Create Issue Form
  public addTaskForm: FormGroup;
  private title: FormControl;
  private type: FormControl;
  private deadline: FormControl;
  private description: FormControl;

  taskTypes = [
    {value: 'Important'},
    {value: 'Normal'},
    {value: 'Trivial'}
  ];

  constructor(public dialogRef: MdDialogRef<AddTaskDialogComponent>, private _dashboardService: DashboardService) {
  }

  private createFormControls(): void {
    this.title = new FormControl('', Validators.required);
    this.type = new FormControl();
    this.deadline = new FormControl();
    this.description = new FormControl();
  }

  private createForm(): void {
    this.addTaskForm = new FormGroup({
      title: this.title,
      type: this.type,
      deadline: this.deadline,
      description: this.description,
    });
  }

  createTask(): void {
    this._dashboardService.addTask(this.title.value, this.type.value, this.description.value, this.deadline.value);
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

}
