import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service'

import { City } from '../city';
import { MyUser } from '../myUser';

// import * as jquery from 'jquery';

// declare const $: any;
// declare var $: any;
declare const $: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    // domaine = new Field();
    city = new City(-1, "Unknown", "Unknown");
    muser = new MyUser(-1, "", "", "", "", null, this.city, '');
    constructor(private router: Router, private userService: UserService) { }
    login: boolean;
    candidate: boolean;
    currentUser;
    ngOnInit() {
        if (localStorage.getItem("currentUser") === null) {
            // console.log('HELLO CANDIDATssssE');
            this.login = false;
            this.candidate = null;
        } else {
            // console.log('HELLO CAsss');
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.login = true;
            if (this.currentUser.type == 'candidate') {
                // console.log('HELLO CANDIDATE');
                this.candidate = true;
            } else {
                // console.log('HELLO COOOOO');
                this.candidate = false;
            }
        }
    }

    onSubmit() {
        $('#loginModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();        
        console.log('LOG IN THE USER WITH : ');
        console.log(this.muser);
        this.userService.logIn(this.muser)
            .subscribe(response => {
                console.log('User has been logged in Response: ');
                console.log(response);
                localStorage.setItem('currentUser', JSON.stringify(response));
                // this.router.navigate(['profile'], { queryParams: { mdata: response } });
                this.login = true;
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if (this.currentUser.type == 'candidate') {
                    this.candidate = true;
                    this.router.navigate(['profile']);
                } else {
                    this.candidate = false;
                    this.router.navigate(['companyprofile']);
                }
                // console.log('USER TYPE DYN IS: ' + this.currentUser.type);
            },
                error => console.log('error: ' + error)
            );
    }
    logout() {
        console.log('Login Out from app...');
        localStorage.removeItem('currentUser');
        this.login = false;
        this.candidate = null;
        this.router.navigate(['home']);
    }

}
