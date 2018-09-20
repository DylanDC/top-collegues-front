//Creation d'une enum Avis
export enum Avis { AIMER, DETESTER };

//Creation d'une structure Collegue
export class Collegue {

    constructor(
        public name: string,
        public score: number,
        public url: string,
        public matricule: string,
        public nom: string,
        public prenom: string,
        public email: string,
        public dateNaissance: string,
        public sexe: string,
        public adresse: string,

    ) { }

}

//Création d'une structure vote
export class Vote {
    constructor(
        public avis: Avis,
        public collegue: Collegue, ) { }
}

export class Form {
    constructor(
        public matricule: string,
        public pseudo: string,
        public urlImage: string) { }
}