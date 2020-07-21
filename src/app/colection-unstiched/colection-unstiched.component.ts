import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colection-unstiched',
  templateUrl: './colection-unstiched.component.html',
  styleUrls: ['./colection-unstiched.component.scss']
})
export class ColectionUnstichedComponent implements OnInit {

  constructor(private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
  }
  showdrop=false;
  openlevel1=true;
  openlevel2=true;
  // company: string = null;
  // selectedCompany: string = null;
  sizes=[{
    'name':'X'
  },{
    'name':'XL'
  },
  {
    'name':'L'
  },
  {
    'name':'S'
  },
  {
    'name':'M'
  },
]

toggle(){
  this.showdrop = !this.showdrop; 
}
openlevel(){
  this.openlevel1 = !this.openlevel1;
}
// openleveltwo(){
//   this.openlevel2 = !this.openlevel2;
// }
// onSelectedCompany(company: string) {  
//   this.company = company;
// }
// productname(){
//   this.router.navigate(['product-name'],{relativeTo:this.route})
// }
}
