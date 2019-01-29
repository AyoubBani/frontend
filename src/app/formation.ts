import { MyUser } from "./myUser";

export class Formation {
    id: number;
    user: MyUser;
    start_date: string;
    end_date: string;
    institute: string
    diplome: string;
    constructor(id: number, user: MyUser, start_date: string, end_date: string, institute: string, diplome: string) {
        this.id = id;
        this.user = user;
        this.start_date = start_date;
        this.end_date = end_date;
        this.institute = institute;
        this.diplome = diplome;
    }
}