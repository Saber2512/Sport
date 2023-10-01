import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
//object
team:any={};
// Form ID
teamForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  //Method
  addTeam(){
    console.log("here team object",this.team);
    
  }

}
