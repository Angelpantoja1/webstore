import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInUser: User;
  userList: User[] = [{
    userName: 'Angel',
    password: 'P@^TOJ@1'

  }];
  constructor() { }

  checkCred(userName: string, password: string): boolean {
    /* this.loggedInUser.userName = userName; */
    let result= false;
    if(userName === this.userList[0].userName){
      if(password = this.userList[0].password){
        result = true;
      }
    }
    return result;
    /* return userName === this.userList[0].userName ? (password === this.userList[0].password ? true : false) : false; */
  }
}
