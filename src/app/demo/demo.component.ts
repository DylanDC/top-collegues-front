import { Component, OnInit } from '@angular/core';
import { Collegue, Avis } from '../model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


  collegues: Collegue[];

  constructor() {
    const col1 = new Collegue();
    col1.pseudo = "Codeur 1";
    col1.score = 1000;

    const col2 = new Collegue();
    col2.pseudo = "Codeur 2";
    col2.score = 200;

    const col3 = new Collegue();
    col3.pseudo = "Codeur 3";
    col3.score = 600;

    const col4 = new Collegue();
    col4.pseudo = "Codeur 4";
    col4.score = 600;

    const col5 = new Collegue();
    col5.pseudo = "Codeur 5";
    col5.score = 600;

    const col6 = new Collegue();
    col6.pseudo = "Codeur 6";
    col6.score = 600;

    const col7 = new Collegue();
    col7.pseudo = "Codeur 7";
    col7.score = 600;

    const col8 = new Collegue();
    col8.pseudo = "Codeur 8";
    col8.score = 600;

    const col9 = new Collegue();
    col9.pseudo = "Codeur 9";
    col9.score = 600;
    this.collegues = [col1, col2, col3, col4, col5, col6, col7, col8, col9];
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
  }

}
