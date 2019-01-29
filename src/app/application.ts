import { Candidate } from "./candidate";
import { Document } from './document';
import { Offre } from "./offre";
export class Application {
    id: number;
    offer: Offre;
    candidate: Candidate;
    lettre_motivation: string;
    attachement: Document[];

    constructor(id: number, offer: Offre, candidate: Candidate, lettre_motivation: string) {
        this.id = id;
        this.offer = offer;
        this.candidate = candidate;
        this.lettre_motivation = lettre_motivation;
    }
}