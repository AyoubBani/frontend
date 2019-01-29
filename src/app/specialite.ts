import {Metier} from './metier';
export class Specialite{
    id: number;
    metier: Metier;
    experience: string;
    constructor(id: number, metier: Metier, experience: string) {
        this.id = id;
        this.metier = metier;
        this.experience = experience;
    }
}