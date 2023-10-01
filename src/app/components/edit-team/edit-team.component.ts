import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamsTab : any = [
    {id:1, name:"FCB", stadium:"Camp nou", owner:"FCB", fondation:1899},
    {id:2, name:"RMD", stadium:"santiago bernabeu", owner:"RMD", fondation:1947},
    {id:3, name:"ATM", stadium:"Cívitas Metropolitano", owner:"ATM", fondation:2017},
  ];
  teamForm:FormGroup;

  findedTeam:any ={};
  constructor(private activateRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  let id=this.activateRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.teamsTab.length; i++) {
     if (this.teamsTab[i].id==id) {
      this.findedTeam=this.teamsTab[i];
      break;
     }
    }
  }
  editTeam(){
    this.router.navigate([`admin`])
  }
}
