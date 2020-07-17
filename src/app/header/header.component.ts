import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  shouldShow = false;
  opennavbar= false;
 
  showsearch(){
    this.shouldShow = !this.shouldShow;
  }
  navbaropen(){
    this.opennavbar = !this.opennavbar;
  }
}