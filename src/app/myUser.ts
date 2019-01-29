import { City } from './city';
export class MyUser {

    constructor(
        public id: number,
        public email: string,
        public first_name: string,
        public last_name: string,
        public password: string,
        public profile_image: File,
        public ville: City,
        public about: string
    ) {

    }

}