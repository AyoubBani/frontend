import { Company } from "./company";
import { Contrat } from './contrat';
import { Metier } from './metier';
export class Offre {
    id: number;
    titre: string;
    description: string;
    salaire: number;
    etat: string;
    contrat: Contrat;
    company: Company;
    metier: Metier;

    constructor(id: number, titre: string, description: string, salaire: number, etat: string, contrat: Contrat, company: Company, metier: Metier) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.salaire = salaire;
        this.etat = etat;
        this.contrat = contrat;
        this.company = company;
        this.metier = metier;
    }
}