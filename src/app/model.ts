//Creation d'une enum Avis
export enum Avis { AIMER, DETESTER };

//Creation d'une structure Collegue
export class Collegue {

    pseudo: string
    score: number

}

//Création d'une structure vote
export class Vote {
    fiche: Collegue;
    vote: Avis

}