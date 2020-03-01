import { Component, OnInit } from '@angular/core';
import { Ipackages } from 'src/app/main/interfaces/ipackages';
import { SignUp } from 'src/app/main/interfaces/sign-up';
import { SignUpService } from 'src/app/main/services/sign-up.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  packageList : Ipackages[];
  loginInfo: SignUp;
  constructor(private pS:SignUpService,) { }

  ngOnInit() {
    this.loginInfo = this.pS.setLogin();
  }

}
