import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import {MdDatepicker, MdIconModule} from '@angular/material';
import {SidebarComponent} from './sidebar/sidebar.component';
import {routing} from './app.routing';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MdIconModule,
    DashboardModule
  ],

  providers: [MdDatepicker],
  bootstrap: [AppComponent]
})
export class AppModule { }
