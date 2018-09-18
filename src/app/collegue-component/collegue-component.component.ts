import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})
export class CollegueComponentComponent implements OnInit {
  @Input() collegue: Collegue;

  constructor(private _collegueSrv: CollegueService) {

  }

  avisRecu: string;

  traiter(avis: Avis) {
    this._collegueSrv.donnerUnAvis(this.collegue, avis).then(col => {
      if (avis === Avis.AIMER) {
        this.collegue.score = col.score
        this.avisRecu = "Vous avez cliqué sur 'J'aime'";
      }
      if (avis === Avis.DETESTER) {
        this.collegue.score = col.score
        this.avisRecu = "Vous avez cliqué sur 'Je déteste'";

      }
    })
  }

  ngOnInit() {
  }

}
