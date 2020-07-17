import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

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
