import { MyUser } from './myUser';
import { Phone } from './phone';
import { Specialite } from './specialite';
export class Candidate {
    user: MyUser;
    birthdate: string;
    etat_civil: string;
    // phone: Phone;
    metier: Specialite;

    constructor(user: MyUser, metier: Specialite) {
        this.user = user;
        // this.birthdate = birthdate;
        // this.etat_civil = etat_civil;
        // this.phone = phone;
        this.metier = metier;
    }
    
}