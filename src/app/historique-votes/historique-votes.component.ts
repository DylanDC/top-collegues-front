import { Component, OnInit, Input, Output, NgModule } from '@angular/core';
import { Collegue, Avis, Vote } from '../model';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {
  votes: Array<Vote> = [];
  nbrVotes: number;
  constructor() {


    this.votes = this.votes.concat([new Vote(Avis.AIMER, new Collegue("Dev 1", -1000, "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1673994/profile/profile-512.jpg?1515254870")),
    new Vote(Avis.AIMER, new Collegue("Dev 2", 5, "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1673994/profile/profile-512.jpg?1515254870")),
    new Vote(Avis.DETESTER, new Collegue("Dev 3", 1000, "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1673994/profile/profile-512.jpg?1515254870")),
    new Vote(Avis.DETESTER, new Collegue("Dev 4", -450, "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1673994/profile/profile-512.jpg?1515254870"))
    ]);
    this.nbrVotes = this.votes.length;
  }

  ngOnInit() {
  }

  supprimer(voteASupprimer) {
    this.votes = this.votes.filter(vote => vote !== voteASupprimer)
  }
}