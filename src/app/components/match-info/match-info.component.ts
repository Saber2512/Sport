import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  matchesTab: any = [
    { id: 1, scoreOne: 3, scoreTwo: 2, teamOne: "FCB", teamTwo: "RMD" },
    { id: 2, scoreOne: 1, scoreTwo: 4, teamOne: "RMD", teamTwo: "ATM" },
    { id: 3, scoreOne: 2, scoreTwo: 0, teamOne: "ATM", teamTwo: "SEV" },
    { id: 4, scoreOne: 5, scoreTwo: 3, teamOne: "SEV", teamTwo: "FCB" },
  ];
  findedMatch:any;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    let id=this.activateRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.matchesTab.length; i++) {
     if (this.matchesTab[i].id==id) {
      this.findedMatch=this.matchesTab[i];
      break;
     }
     
    }
    console.log(this.findedMatch);
  }
}
