import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matchesTab: any = [];
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit() {
    // this.matchesTab = JSON.parse(localStorage.getItem("matches")||"[]")
    this.matchService.displayAllMatches().subscribe((response) => {
      console.log("Here  response from BE", response);

    }

    )

  }
  goToDisplat(id: Number) {
    // alert("clicked" + id);
    // location.replace("....");
    // this.router.navigate(["matchInfo/"+id]);
    this.router.navigate([`matchInfo/${id}`]);
  }
  edit(id: Number) {
    this.router.navigate([`editMatch/${id}`]);
  }

}
