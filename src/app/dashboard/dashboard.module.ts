/**
 * Created by pawel.idziak on 26.06.2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DashboardService} from './dashboard.service';
import {TaskComponent} from './task/task.component';
import {MdDialogModule, MdNativeDateModule} from '@angular/material';
import {MdDatepickerModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {DndModule} from 'ng2-dnd';
import {AddTaskDialogComponent} from './add-task-dialog/add-task-dialog.component';
import {DashboardComponent} from './dashboard.component';
import {MdGridListModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdSelectModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdSnackBarModule} from '@angular/material';
import {EditTaskDialogComponent} from './edit-task-dialog/edit-task-dialog.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, DndModule.forRoot(),
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdDialogModule,
    MdDatepickerModule, MdNativeDateModule,
    MdInputModule,
    MdGridListModule,
    FormsModule, ReactiveFormsModule,
    MdSelectModule,
    MdTooltipModule,
    MdMenuModule,
    MdSnackBarModule
  ],
  declarations: [DashboardComponent, AddTaskDialogComponent, TaskComponent, EditTaskDialogComponent],
  providers: [DashboardService],
  entryComponents: [AddTaskDialogComponent, EditTaskDialogComponent],

})
export class DashboardModule {
}
