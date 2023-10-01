import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL : string = "http://localhost:3000/api/players"
  constructor(private httpClient:HttpClient) { }
  addPlayer(playerObj){
    return this.httpClient.post(this.playerURL, playerObj)
  }

  editPlayer(newPlayer){
    return this.httpClient.post(this.playerURL, newPlayer)
  }
  getPlayerById(id){
    return this.httpClient.get(`${this.playerURL}/${id}`)
  }
  deletePlayerPlayerById(id){
    return this.httpClient.delete(`${this.playerURL}/${id}`)
  }
}

