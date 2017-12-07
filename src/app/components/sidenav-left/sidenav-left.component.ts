import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-left',
  templateUrl: './sidenav-left.component.html',
  styleUrls: ['./sidenav-left.component.css']
})
export class SidenavLeftComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
    this.message = 'sidenav left works !';
  }

}
