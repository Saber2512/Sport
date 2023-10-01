import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
//object
player:any={};
// Form ID
playerForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }
  //Method
  addPlayer(){
    console.log("here player object",this.player);
    
  }

}
