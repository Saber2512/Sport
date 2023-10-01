import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
@Input() matchInput:any;
  constructor() { }

  ngOnInit() {
  }
  scoreColor(a:any,b:any){
    if (a>b) {
      return "green";
    } else if (a<b) {
      return "red";
    }else{
      return "blue";
    }
  }
}
