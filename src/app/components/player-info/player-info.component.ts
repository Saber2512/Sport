import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  playersTab: any =[
    {id:1, name:"Cris", position:"attaquant", nbr:7},
    {id:2, name:"Messy", position:"attaquant", nbr:10},
    {id:3, name:"Mbappy", position:"attaquant", nbr:10},
  ];
  findedPlayer:any;

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    let id=this.activateRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.playersTab.length; i++) {
     if (this.playersTab[i].id==id) {
      this.findedPlayer=this.playersTab[i];
      break;
     }
     
    }
    console.log(this.findedPlayer);
  }

}
