import { Component, OnInit } from '@angular/core';
import { Collegue, Avis } from '../model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


  collegues: Collegue[];

  constructor(private _collegueSrv: CollegueService) {

  }

  masquerSection = true;

  //traiter l'évènement
  avisRecu: string;

  traiter($event: Avis) {

    if ($event == Avis.AIMER)
      // this.avisRecu = $event;
      this.avisRecu = "Vous avez cliqué sur 'J'aime'";
    if ($event == Avis.DETESTER)
      // this.avisRecu = $event;
      this.avisRecu = "Vous avez cliqué sur 'Je déteste'";


  }

  ngOnInit() {
    this._collegueSrv.listerCollegues().then(tabCollegue => (this.collegues = tabCollegue))
  }

}
