import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  private padding: number;

  public isSidebarOpen(value: number): void {
    this.padding = value;
  }
}
