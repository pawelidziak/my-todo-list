import {Component, OnInit} from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-simple-dnd',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {



  listBoxers: Array<string> = ['Sugar Ray Robinson', 'Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  listTeamOne: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali'];
  listTeamTwo: Array<string> = [];

  constructor() {
  }


  ngOnInit() {



  }

}
class Container {
  constructor(public id: number, public name: string, public tasks: Array<Task>) {
  }
}

class Task {
  constructor(public name: string) {
  }
}
