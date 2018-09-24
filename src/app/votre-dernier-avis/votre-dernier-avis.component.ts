import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Avis } from '../model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.scss']
})
export class VotreDernierAvisComponent implements OnInit {
  resultat: string;
  abonnementSuperBus: Subscription;
  constructor(private _collegueSrv: CollegueService) { }

  ngOnInit() {
    this.abonnementSuperBus = this._collegueSrv.bus.subscribe(vote => {

      if (vote.avis === Avis.AIMER) {
        this.resultat = "J'ai aimé"
      }

      if (vote.avis === Avis.DETESTER) {
        this.resultat = "j'ai detesté"
      }

      this.resultat += (" " + vote.collegue.name)
    })
  }

  ngOnDestroy() {
    this.abonnementSuperBus.unsubscribe();
  }

}
