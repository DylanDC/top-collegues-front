import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BonjourComponent } from './bonjour/bonjour.component';
import { BonjourAvecPrenomComponent } from './bonjour-avec-prenom/bonjour-avec-prenom.component';
import { BonjourLesColleguesComponent } from './bonjour-les-collegues/bonjour-les-collegues.component';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';

import { AnimatedGaleryComponent } from './animated-galery/animated-galery.component';
import { AjouterCollegueComponent } from './ajouter-collegue/ajouter-collegue.component';
import { FormsModule } from '@angular/forms';
import { ScorePipe } from './pipes/score.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';
import { LastAvisPipe } from './pipes/last-avis.pipe';
const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'nouveau', component: AjouterCollegueComponent },
  { path: 'collegues/:name', component: DetailCollegueComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    BonjourAvecPrenomComponent,
    BonjourLesColleguesComponent,
    DemoComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponentComponent,
    HistoriqueVotesComponent,
    AccueilComponent,
    MenuComponent,
    DetailCollegueComponent,

    AnimatedGaleryComponent,

    AjouterCollegueComponent,

    ScorePipe,

    SearchPipe,

    VotreDernierAvisComponent,

    LastAvisPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
