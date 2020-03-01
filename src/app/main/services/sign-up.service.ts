import { Injectable } from '@angular/core';
import { SignUp } from '../interfaces/sign-up';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  loggedInUser: SignUp;
  
  login: SignUp = {
    userName:'Username',
    fName: 'First Name',
    lName:'Last Name',
    email:'email@email.com',
    pass: 'Password',
    /* conPass:'Con Pass' */
  };
  userList: SignUp[] = [];
  constructor() { }
  
  ngOnInit(){
  }

  setLogin(){
    return this.login;
  }
  checkPassword(userName: string, passWord: string): boolean {
    /* this.loggedInUser.userName = userName; */
    return userName === this.userList[0].userName ? (passWord === this.userList[0].pass ? true : false) : false;
  }

  checkIfUserExists(userName:string): boolean{
    //search for username
    let result = false;
    if(this.userList.find(x => userName.toLowerCase() === x.userName) !== undefined){
      result = true;
    };
    return result;
  }

  addUser(userAccount: SignUp){
    /* const userAccount :User = {
      userName: uN.toLowerCase(),
      passWord: pW
    }; */
    this.userList.push(userAccount);
    localStorage.setItem('user', JSON.stringify(this.userList));
    console.log(this.userList);
  }
  setUserList(){
    if(JSON.parse(localStorage.getItem('user'))){
      this.userList = JSON.parse(localStorage.getItem('user'));
    }
  }

  // checkPassword(pass: string, conPass: string): boolean {
  //   // this.loggedInUser.userName = userName;
  //   return conPass === this.userList[0].pass ? true : false;
  // } 

}
  