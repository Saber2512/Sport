import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
tab:any={id:1, scoreOne:2, scoreTwo:2, teamOne:"FCB",  teamTwo:"RMD"};
  constructor() { }

  ngOnInit() {
  }

}
