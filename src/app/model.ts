//Creation d'une enum Avis
export enum Avis { AIMER, DETESTER };

//Creation d'une structure Collegue
export class Collegue {

    constructor(public pseudo: number, public score: number, public url: string) { }

}

//Création d'une structure vote
export class Vote {
    fiche: Collegue;
    vote: Avis

}