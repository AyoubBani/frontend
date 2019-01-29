import { MyUser } from "./myUser";

export class Document {
    id: number;
    nom: string;
    document: File;
    user: MyUser;
    constructor(id: number, user: MyUser, nom: string, document: File) {
        this.id = id;
        this.user = user;
        this.nom = nom;
        this.document = document;
    }
}