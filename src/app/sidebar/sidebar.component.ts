import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  private sidebarSmall: boolean;
  @Output() sendValue: EventEmitter<number>;


  constructor() {
    this.sendValue = new EventEmitter<number>();
  }

  ngOnInit() {
    this.detectSize();
  }

  // metoda zwijajaca sidebar
  toggleSidebar(): void {
    this.sidebarSmall = !this.sidebarSmall;
    this.collapseSidebar(this.sidebarSmall);
  }

  private detectSize(): void {
    // podczas wczytywania strony
    const changeWhen = 768;
    if (window.innerWidth < changeWhen) {
      this.collapseSidebar(true);
    } else {
      this.collapseSidebar(false);
    }

    // podczas zmiany dynamicznej
    const resizeEvent = Observable.fromEvent(window, 'resize')
      .map(() => {
        return window.innerWidth;
      });

    resizeEvent.subscribe(data => {
      if (data < changeWhen) {
        this.collapseSidebar(true);
      } else {
        this.collapseSidebar(false);
      }
    });
  }

  private collapseSidebar(value: boolean): void {
    this.sidebarSmall = value;
    let tmp: number;
    tmp = this.sidebarSmall ? 60 : 200;
    this.sendValue.emit(tmp);
  }

}
