import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/main/services/user.service';
import { SignUpService } from 'src/app/main/services/sign-up.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private dService: UserService) { }

  ngOnInit() {
  }

  logIn(userName: string, password:string) {
    if(this.dService.checkCred(userName,password)) {
      alert('Your Logged in');
    } else {
      alert('Please try again');
    }
  }

}
