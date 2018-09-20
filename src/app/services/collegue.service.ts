import { Injectable } from '@angular/core';
import { Collegue, Avis, Form } from '../model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: "root"
})

export class CollegueService {

  constructor(private _http: HttpClient, ) {

  }

  listerCollegues(): Promise<Collegue[]> {
    return this._http.get(URL_BACKEND)
      .toPromise()
      .then((data: any[]) => data.map(d => new Collegue(d.name, d.score, d.url, d.matricule, d.nom, d.prenom, d.email, d.dateNaissance, d.sexe, d.adresse)))

  }


  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur
    let resultat
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    if (avis === Avis.AIMER) {
      resultat = this._http.patch(URL_BACKEND + `/${unCollegue.name}`, "{ \"action\" : \"AIMER\" }", httpOptions).toPromise()
    }
    if (avis === Avis.DETESTER) {
      resultat = this._http.patch(URL_BACKEND + `/${unCollegue.name}`, "{ \"action\" : \"DETESTER\"}", httpOptions).toPromise()
    }
    return resultat
  }

  findByName(name: string): Promise<Collegue> {
    return this._http.get(URL_BACKEND + `/${name}`)
      .toPromise()
      .then((data: any) => new Collegue(data.name, data.score, data.url, data.matricule, data.nom, data.prenom, data.email, data.dateNaissance, data.sexe, data.adresse))
  }

  sendForm(envoie: Form) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this._http.post(URL_BACKEND + `/nouveau`, envoie, httpOptions).toPromise()

  }

}
