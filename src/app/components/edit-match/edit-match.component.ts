import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchesTab: any = [
    { id: 1, scoreOne: 3, scoreTwo: 2, teamOne: "FCB", teamTwo: "RMD" },
    { id: 2, scoreOne: 1, scoreTwo: 4, teamOne: "RMD", teamTwo: "ATM" },
    { id: 3, scoreOne: 2, scoreTwo: 0, teamOne: "ATM", teamTwo: "SEV" },
    { id: 4, scoreOne: 5, scoreTwo: 3, teamOne: "SEV", teamTwo: "FCB" },
  ];
  matchForm: FormGroup;

  findedMatch: any = {};
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].id == id) {
        this.findedMatch = this.matchesTab[i];
        break;
      }
    }
  }
  editMatch(id: Number) {
    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].id == id) {
        this.matchesTab[i].scoreOne = this.findedMatch.scoreOne;
        this.matchesTab[i].scoreTwo = this.findedMatch.scoreTwo;
        this.matchesTab[i].teamOne = this.findedMatch.teamOne;
        this.matchesTab[i].teamTwo = this.findedMatch.teamTwo;
        break;
      }
      console.log(this.matchesTab[i]);
    }
    // this.router.navigate([`admin`])
  }

}
