import { Secteur } from './secteur'
export class Metier {
    id: number;
    secteur: Secteur;
    metier: string;
    constructor(id: number, secteur: Secteur, metier: string) {
        this.id = id;
        this.secteur = secteur;
        this.metier = metier;
    }
}