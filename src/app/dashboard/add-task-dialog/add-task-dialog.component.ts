import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Task} from '../../_classes/Task';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.sass']
})
export class AddTaskDialogComponent implements OnInit {

  // Create Issue Form
  private addTaskForm: FormGroup;
  private title: FormControl;
  private type: FormControl;
  private deadline: FormControl;
  private description: FormControl;

  taskTypes = [
    {value: 'Important'},
    {value: 'Normal'},
    {value: 'Trivial'}
  ];

  constructor(public dialogRef: MdDialogRef<AddTaskDialogComponent>) {
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
    const color = this.adjustTaskColor(this.type.value);
    const task = new Task(this.title.value, this.type.value, color, this.description.value, this.deadline.value);
    this.dialogRef.close(task);
  }

  private adjustTaskColor(value: string): string {
    switch (value) {
      case 'Important': return '#F44336';
      case 'Normal': return '#1976D2';
      case 'Trivial': return '#8BC34A';
    }
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }


}
