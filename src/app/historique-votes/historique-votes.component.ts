import { Component, OnInit, Input } from '@angular/core';
import { CollegueComponentComponent } from '../collegue-component/collegue-component.component';
import { Collegue, Vote } from '../model';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {
  //liste de votes
  @Input() voteTab: Vote[]
  constructor() {

  }

  ngOnInit() {
  }

}
