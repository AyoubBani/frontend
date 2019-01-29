import { MyUser } from './myUser';
export class Company {
    user: MyUser;
    company_name: string;
    description: string;
    website: string
    constructor(user: MyUser, company_name: string, description: string, website: string) {
        this.user = user;
        this.company_name = company_name;
        this.description = description;
        this.website = website;
    }
}