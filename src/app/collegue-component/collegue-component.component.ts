import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../model';
import { CollegueService } from '../services/collegue.service';
import { HttpErrorResponse } from '@angular/common/http';
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
  errMsg: string;
  ngOnInit() {
    console.log(this.collegue)
  }
  traiter(avis: Avis) {

    this._collegueSrv.donnerUnAvis(this.collegue, avis).then(col => {
      if (avis === Avis.AIMER) {
        this.collegue.score = col.score
        this.avisRecu = "Vous avez cliqué sur 'J'aime'";
      }
      if (avis === Avis.DETESTER) {
        this.collegue.score = col.score
        this.avisRecu = "Vous avez cliqué sur 'Je Deteste'";
      }

    }).catch((errServeur: HttpErrorResponse) => {
      if (errServeur.error.message) {
        this.errMsg = errServeur.error.message;
      } else {
        this.errMsg = 'Erreur technique côté serveur';
      }
    });


  }
}


