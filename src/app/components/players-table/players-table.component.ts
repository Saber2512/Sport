import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab: any =[
    {id:1, name:"Cris", position:"attaquant", nbr:7},
    {id:2, name:"Messy", position:"attaquant", nbr:10},
    {id:3, name:"Mbappy", position:"attaquant", nbr:10},

  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToDisplat(id: Number) {
   
    this.router.navigate([`playerInfo/${id}`]);
  }
  edit(id: Number){
    this.router.navigate([`editPlayer/${id}`]);
  }
}
