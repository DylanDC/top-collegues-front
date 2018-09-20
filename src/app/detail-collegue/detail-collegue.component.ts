import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Collegue, Avis } from '../model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss']
})
export class DetailCollegueComponent implements OnInit {
  name: string;
  collegue: Collegue;
  errMsg: string;
  avisRecu: string;
  constructor(private route: ActivatedRoute, private _collegueSrv: CollegueService) {
    this.name = route.snapshot.paramMap.get("name");

  }

  ngOnInit() {
    this.collegue = new Collegue("", 0, "", "", "", "", "", "", "", "");
    this._collegueSrv.findByName(this.name).then(col => this.collegue = col).catch((errServeur: HttpErrorResponse) => {
      if (errServeur.error.message) {
        this.errMsg = errServeur.error.message;
      } else {
        this.errMsg = 'Erreur technique côté serveur';
      }
    });
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
