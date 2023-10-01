import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teamsTab: any = [
    { id: 1, name: "FCB", stadium: "Camp nou", owner: "FCB", fondation: 1899 },
    { id: 2, name: "RMD", stadium: "santiago bernabeu", owner: "RMD", fondation: 1947 },
    { id: 3, name: "ATM", stadium: "Cívitas Metropolitano", owner: "ATM", fondation: 2017 },
  ];
  findedTeam: any;

  constructor(private acivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id = this.acivatedRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.teamsTab.length; i++) {
      if (this.teamsTab[i].id == id) {
        this.findedTeam = this.teamsTab[i];
        break;
      }
     
    }
    
    console.log(this.findedTeam);
    
  }

}
