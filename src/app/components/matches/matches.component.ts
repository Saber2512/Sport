import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matchesTab:any=[
  {id:1, scoreOne:3, scoreTwo:2, teamOne:"FCB",  teamTwo:"RMD"},
  {id:2, scoreOne:1, scoreTwo:4, teamOne:"RMD",  teamTwo:"ATM"},
  {id:3, scoreOne:2, scoreTwo:0, teamOne:"ATM",  teamTwo:"SEV"},
  {id:4, scoreOne:5, scoreTwo:3, teamOne:"SEV",  teamTwo:"FCB"},
]
  constructor() { }

  ngOnInit() {
  }

}
