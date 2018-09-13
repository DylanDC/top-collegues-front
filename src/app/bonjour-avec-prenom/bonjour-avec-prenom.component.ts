import {
  Component,
  OnInit,
  Input // ajouter l'import du composant Input
} from '@angular/core';

@Component({
selector: 'app-bonjour-avec-prenom',
templateUrl: './bonjour-avec-prenom.component.html',
styleUrls: ['./bonjour-avec-prenom.component.css']
})
export class BonjourAvecPrenomComponent implements OnInit {


@Input() prenom:string; // déclarer que ce champ est un paramètre du composant

constructor() {
   // ici plus de valorisation de la propriété du composant
}

ngOnInit() {

}
}