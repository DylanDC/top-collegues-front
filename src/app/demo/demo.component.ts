import { Component, OnInit } from '@angular/core';
import { Collegue, Avis } from '../model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  colFictif:Collegue;
  collegues:Collegue[];

  constructor() {
    this.colFictif = new Collegue();
    this.colFictif.pseudo = "Codeur 1";
    this.colFictif.score = 1000;

    const col2 = new Collegue();
    col2.pseudo = "Codeur 2";
    col2.score = 200;

    this.collegues = [this.colFictif, col2];
   }

masquerSection=true;

//traiter l'évènement
avisRecu:string;

  traiter($event:Avis){
    if ($event == Avis.AIMER)
    this.avisRecu = "Vous avez cliqué sur 'J'aime'";
    if  ($event == Avis.DETESTER)
    this.avisRecu = "Vous avez cliqué sur 'Je déteste'";

   // this.avisRecu = $event;
  }

  ngOnInit() {
  }

}
