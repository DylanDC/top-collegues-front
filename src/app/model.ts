//Creation d'une enum Avis
export enum Avis { AIMER, DETESTER };

//Creation d'une structure Collegue
export class Collegue {

    constructor(public pseudo: string, public score: number, public url: string) { }

}

//Création d'une structure vote
export class Vote {
    collegue: Collegue;
    avis: Avis

    constructor(avis, collegue) {
        this.avis = avis;
        this.collegue = collegue;
    }
}