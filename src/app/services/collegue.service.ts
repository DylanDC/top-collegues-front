import { Injectable } from '@angular/core';
import { Collegue, Avis, Form, Vote } from '../model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: "root"
})

export class CollegueService {
  private _bus = new Subject<Vote>()

  get bus(): Observable<Vote> {
    return this._bus.asObservable();
  }
  constructor(private _http: HttpClient, ) {

  }

  listerCollegues(): Observable<Collegue[]> {
    //recuperer la liste coté serveur
    return this._http.get(URL_BACKEND)
      .pipe(map(((data: any[]) => data.map(d =>
        new Collegue(d.name, d.score, d.url, d.matricule, d.nom, d.prenom, d.email, d.dateNaissance, d.sexe, d.adresse)))))


  }


  donnerUnAvis(unCollegue: Collegue, avis: Avis): Observable<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur
    let resultat
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    if (avis === Avis.AIMER) {
      resultat = this._http.patch(URL_BACKEND + `/${unCollegue.name}`, "{ \"action\" : \"AIMER\" }", httpOptions)
    }
    if (avis === Avis.DETESTER) {
      resultat = this._http.patch(URL_BACKEND + `/${unCollegue.name}`, "{ \"action\" : \"DETESTER\"}", httpOptions)
    }
    return resultat.pipe(
      map((col: any) => new Collegue(col.name, col.score, col.url, col.matricule, col.nom, col.prenom, col.email, col.dateNaissance, col.sexe, col.adresse)),
      tap((data: Collegue) => this._bus.next(new Vote(avis, data)))
    )

  }

  findByName(name: string): Observable<Collegue> {
    return this._http.get(URL_BACKEND + `/${name}`)
      .pipe(map((data: any) => new Collegue(data.name, data.score, data.url, data.matricule, data.nom, data.prenom, data.email, data.dateNaissance, data.sexe, data.adresse)))

  }

  sendForm(envoie: Form): Observable<any> {


    return this._http.post(URL_BACKEND + `/nouveau`, envoie)

  }


}
