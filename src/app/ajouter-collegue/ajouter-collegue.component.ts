import { Component, OnInit, Input } from '@angular/core';
import { Form, Collegue, Avis } from '../model';
import { url } from 'inspector';
import { CollegueService } from '../services/collegue.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-collegue',
  templateUrl: './ajouter-collegue.component.html',
  styleUrls: ['./ajouter-collegue.component.scss']
})
export class AjouterCollegueComponent implements OnInit {

  constructor(private _collegueSrv: CollegueService) { }

  ngOnInit() {
  }

  form: Form = new Form("", "", "")
  errMsg: string;
  submit() {
    console.log(this.form)
    this._collegueSrv.sendForm(this.form).catch((errServeur: HttpErrorResponse) => {
      if (errServeur.error.message) {
        this.errMsg = errServeur.error.message;
      } else {
        this.errMsg = 'Erreur technique côté serveur';
      }
    });
  }



}

