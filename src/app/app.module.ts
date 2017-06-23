import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { SimpleDndComponent } from './simple-dnd/simple-dnd.component';
import { DndModule } from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDndComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
