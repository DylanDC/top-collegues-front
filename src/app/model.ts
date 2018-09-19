//Creation d'une enum Avis
export enum Avis { AIMER, DETESTER };

//Creation d'une structure Collegue
export class Collegue {

    constructor(
        public name: string,
        public score: number,
        public url: string) { }

}

//Création d'une structure vote
export class Vote {
    


    constructor(
        public avis: Avis,
        public collegue:Collegue,) {}
}