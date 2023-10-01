import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab : any = [
    {id:1, name:"FCB", stadium:"Camp nou", owner:"FCB", fondation:1899},
    {id:2, name:"RMD", stadium:"santiago bernabeu", owner:"RMD", fondation:1947},
    {id:3, name:"ATM", stadium:"Cívitas Metropolitano", owner:"ATM", fondation:2017},
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToDisplat(id:Number){
    this.router.navigate([`teamInfo/${id}`])
  }
  edit(id: Number){
    this.router.navigate([`editTeam/${id}`]);
  }

}
