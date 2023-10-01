import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab: any =[
    {id:1, name:"Cris" , nbr:7, position:"ATK"},
    {id:2, name:"Messy", nbr:10, position:"ATK"},
    {id:3, name:"Salah", nbr:9, position:"DEF"},

  ]
  constructor() { }

  ngOnInit() {
  }

}
