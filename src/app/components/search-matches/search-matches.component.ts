import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
  matchesTab: any = [
    { id: 1, scoreOne: 3, scoreTwo: 2, teamOne: "FCB", teamTwo: "RMD" },
    { id: 2, scoreOne: 1, scoreTwo: 4, teamOne: "RMD", teamTwo: "ATM" },
    { id: 3, scoreOne: 2, scoreTwo: 0, teamOne: "ATM", teamTwo: "SEV" },
    { id: 4, scoreOne: 3, scoreTwo: 2, teamOne: "SEV", teamTwo: "FCB" },
  ];
  searchMatchesTab: any = [];
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      scoreOne: ["", [Validators.required]],
      scoreTwo: ["", [Validators.required]],
    })
  }
  searchMatches() {

    for (let i = 0; i < this.matchesTab.length; i++) {
      let x = this.searchForm.value;
      console.log(this.searchForm.value);
      if (this.matchesTab[i].scoreOne == x.scoreOne && this.matchesTab[i].scoreTwo == x.scoreTwo) {
        this.searchMatchesTab.push(this.matchesTab[i]);
      }
    }
    console.log(this.searchMatchesTab);

  }
}


