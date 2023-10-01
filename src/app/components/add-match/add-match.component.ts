import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //object
  match:any={};
  // Form ID
  matchForm: FormGroup;

  constructor(private matchService:MatchService ) { }

  ngOnInit() {}
  //Method
  addMatch(){
    console.log("here match object",this.match);
    this.matchService.addMatch(this.match).subscribe((response)=>{
      console.log("Here response from BE",response);
      
    });
  }

}
