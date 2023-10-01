import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "signin", component: LoginComponent },
  { path: "subscription", component: SignupComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "admin", component: AdminComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'players', component: PlayersComponent },
  { path: "subscriptionAdmin", component: SignupComponent },
  { path: "profil", component: ProfileComponent },
  // path => path paramétré
  { path: "matchInfo/:id", component: MatchInfoComponent },
  { path: "playerInfo/:id", component: PlayerInfoComponent },
  { path: "teamInfo/:id", component: TeamInfoComponent },
  { path: "editMatch/:id", component: EditMatchComponent },
  { path: "editPlayer/:id", component: EditPlayerComponent },
  { path: "editTeam/:id", component: EditTeamComponent },
  { path: 'searchMatches', component: SearchMatchesComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
