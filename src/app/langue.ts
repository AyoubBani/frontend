import { MyUser } from "./myUser";

export class Langue {
    id: number;
    langue: string;
    niveau: number;
    user: MyUser;
    constructor(id: number, user: MyUser, langue: string, niveau: number) {
        this.id = id;
        this.user = user;
        this.langue = langue;
        this.niveau = niveau;
    }
}