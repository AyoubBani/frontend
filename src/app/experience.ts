import { MyUser } from "./myUser";

export class Experience {
    id: number;
    user: MyUser;
    start_date: string;
    end_date: string;
    intitule: string
    description: string;
    constructor(id: number, user: MyUser, start_date: string, end_date: string, intitule: string, description: string, ) {
        this.id = id;
        this.user = user;
        this.start_date = start_date;
        this.end_date = end_date;
        this.intitule = intitule;
        this.description = description;
    }
}