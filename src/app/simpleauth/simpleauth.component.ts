import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user';
@Component({
  selector: 'app-simpleauth',
  templateUrl: './simpleauth.component.html',
  styleUrls: ['./simpleauth.component.css']
})
export class SimpleauthComponent implements OnInit {
  model = new User('ayoub', 'ayoub@gmail.com', 'pass123Hero$');
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.submitted = true;
    // console.log() 
    /*this.userService.addUser(this.model)
      .subscribe(response => {
        console.log('User: ' + this.model.username + 'has been registred');
      },
        error => console.log('error: ' + error)
      );
      */
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


}
