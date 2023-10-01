import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // l'adresse de serveur backend
  matchURL: string = "http://localhost:3000/api/matches"
  //httpClient: bostagi
  constructor(private httpClient: HttpClient) { }
  //Array of matches objets
  displayAllMatches() {
    return this.httpClient.get<{ matches: any }>(this.matchURL);
  }
  displayMatchById(id) {
    //return this.httpClient.get(this.matchURL + "/" + id)
    return this.httpClient.get(`${this.matchURL}/${id}`);

  }
  //boolean,string
  deleteMatch(id) {
    return this.httpClient.delete(`${this.matchURL}/${id}`)

  }
  //boolean,string
  addMatch(matchObj) {
    return this.httpClient.post<{ msg: string }>(this.matchURL, matchObj)

  }
  //boolean,string
  editMatch(newMatch) {
    return this.httpClient.put(this.matchURL, newMatch)

  }



  searchMatchByScore() { }
}
