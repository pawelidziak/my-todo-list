import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdDatepicker, MdIconModule} from '@angular/material';
import {SidebarComponent} from './sidebar/sidebar.component';
import {routing} from './app.routing';
import {DashboardModule} from './dashboard/dashboard.module';
import { InfoComponent } from './info/info.component';
import {MdCardModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MdIconModule,
    DashboardModule,
    MdCardModule,
    MdListModule,
    MdButtonModule,
    MdTooltipModule
  ],
  providers: [MdDatepicker],
  bootstrap: [AppComponent]
} as NgModule)
export class AppModule { }
