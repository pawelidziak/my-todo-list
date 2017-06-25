import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DndModule } from 'ng2-dnd';

import {MdIconModule} from '@angular/material';


import {MdCardModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import {routing} from './app.routing';
import { TaskComponent } from './dashboard/task/task.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MdIconModule,
    DndModule.forRoot(),
    MdCardModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
