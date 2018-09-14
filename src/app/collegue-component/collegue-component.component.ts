import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../model';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})
export class CollegueComponentComponent implements OnInit {
  @Input() collegue: Collegue;

  constructor() {

  }

  avisRecu: string;

  traiter($event: Avis) {
    console.log('boolean', $event)
    if ($event == Avis.AIMER)
      this.avisRecu = "Vous avez cliqué sur 'J'aime'";
    if ($event == Avis.DETESTER)
      this.avisRecu = "Vous avez cliqué sur 'Je déteste'";

  }

  ngOnInit() {
  }

}
