import { MyUser } from "./myUser";

export class Competence {
    id: number;
    competence: string;
    niveau: number;
    user: MyUser;
    constructor(id: number, user: MyUser, competence: string, niveau: number) {
        this.id = id;
        this.user = user;
        this.competence = competence;
        this.niveau = niveau;
    }
}