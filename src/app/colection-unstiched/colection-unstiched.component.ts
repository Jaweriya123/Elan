import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colection-unstiched',
  templateUrl: './colection-unstiched.component.html',
  styleUrls: ['./colection-unstiched.component.scss']
})
export class ColectionUnstichedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showdrop=false;
  sizes=[{
    'name':'X'
  },{
    'name':'XL'
  },
  {
    'name':'L'
  },
]

toggle(){
  this.showdrop = !this.showdrop; 
}
}