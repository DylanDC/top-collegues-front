import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Collegue } from '../model';
@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss']
})
export class DetailCollegueComponent implements OnInit {
  name: string;
  collegue: Collegue;

  constructor(private route: ActivatedRoute, private _collegueSrv: CollegueService) {
    this.name = route.snapshot.paramMap.get("name");

  }

  ngOnInit() {
    this.collegue = new Collegue("", 0, "");
    this._collegueSrv.findByName(this.name).then(col => (this.collegue = col));
  }

}
