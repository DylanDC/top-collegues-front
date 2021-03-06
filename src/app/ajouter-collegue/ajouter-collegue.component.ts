import { Component, OnInit, } from '@angular/core';
import { Form, } from '../model';
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
    this._collegueSrv.sendForm(this.form).subscribe(
      text => console.log("Ok", text),
      err => console.log('errr', err)
    )
  };
}





