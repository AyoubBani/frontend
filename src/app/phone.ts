import { MyUser } from "./myUser";

export class Phone {
    id: number;
    code: string;
    number: string;
    user: MyUser;
    constructor(id: number, user: MyUser, code: string, number: string) {
        this.id = id;
        this.user = user;
        this.code = code;
        this.number = number;
    }
}