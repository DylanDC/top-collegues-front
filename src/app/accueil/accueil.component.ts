import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Collegue, Avis } from '../model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  collegues: Collegue[];

  constructor(private _collegueSrv: CollegueService) {

  }




  ngOnInit() {
    this._collegueSrv.listerCollegues().subscribe(tabCollegue => (this.collegues = tabCollegue))
  }


  raffraichir() {
    this.ngOnInit()
  }
}
