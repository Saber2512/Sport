import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playersTab: any =[
    {id:1, name:"Cris", position:"attaquant", nbr:7},
    {id:2, name:"Messy", position:"attaquant", nbr:10},
    {id:3, name:"Mbappy", position:"attaquant", nbr:10},

  ];
  playerForm:FormGroup;

  findedPlayer:any ={};
  constructor(private activateRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  let id=this.activateRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.playersTab.length; i++) {
     if (this.playersTab[i].id==id) {
      this.findedPlayer=this.playersTab[i];
      break;
     }
    }
  }
  editPlayer(){
   
    this.router.navigate([`admin`])
  }


}
