import { Component, OnInit } from '@angular/core';
import { SignUpService } from 'src/app/main/services/sign-up.service';
import { SignUp } from 'src/app/main/interfaces/sign-up';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

// export class UserFormComponent implements OnInit {

//   userForm: FormGroup;
//   constructor(private formBuilder: FormBuilder, private sService: SignUpService) {
//     sService.setusersInfo();
//    }

//   ngOnInit() {
//     this.userForm = new FormGroup({
//       /* Name: new FormControl('', [Validators.required, Validators.minLength(2)]), */
//       uName: new FormControl('', Validators.required),
//       fName: new FormControl('', Validators.required),
//       lName: new FormControl('', Validators.required),
//       password: new FormControl('', Validators.required),
//       conpassword: new FormControl('', Validators.required),
//     });

//     this.userForm = this.formBuilder.group({
//       fName: ['', Validators.required],
//       lName: ['', [Validators.required, Validators.minLength(2)]],
//       mName: ['', Validators.required],
//       passwordGroup: this.formBuilder.group({
//         password: null,
//         confirmPassword: null
//       }, { validator: this.passwordMatch }),
//     });
//   }

//   passwordMatch(c: AbstractControl): { [key: string]: boolean } | null {
//     const pass = c.get('password');
//     const conPass = c.get('confirmPassword');
//     if (pass.value && conPass.value && pass.value !== conPass.value) {
//       return { 'mismatch': true };
//     }
//     return null;
//   }


// }

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  logInInfo: SignUp = {
    userName: '',
    fName: '',
    lName: '',
    email: '',
    pass: '',
    /* conPass: '' */
  }
  constructor(private pService: SignUpService) {
    pService.setUserList();
   }

  ngOnInit() {
    this.logInInfo = this.pService.setLogin();
  }

  setLogin(uN: string, fN: string, lN: string, email: string, pass: string, conPass: string) {
    this.logInInfo.userName = uN;
    this.logInInfo.fName = fN;
    this.logInInfo.lName = lN;
    this.logInInfo.email = email;
    this.logInInfo.pass = pass;
    /* this.logInInfo.conPass = conPass; */
    this.pService.login = this.logInInfo;
  }
  signUp(userName:string, fName:string, lName:string, email:string, passWord:string, cPass:string) {
    //Check if email confirmed
    //check if password is the same
    if(passWord.length > 3){
      //check if password matches
      if(passWord === cPass){
        //check to see if username is taken
        if(this.pService.checkIfUserExists(userName)){
          alert('Username already Exists');
        }else{
          //you send entire object to be added to the arry
          const addThisName: SignUp = {
            userName: userName,
            fName: fName,
            lName: lName,
            email: email,
            pass: passWord,
          }
          this.pService.addUser(addThisName)
          alert('Welcome you can now Signed In');
        }
      }else{
        alert('Password does not match');
      }
    }else{
      alert('Password is to Short')
    } 
  }

  login(userName:string, passWord:string){
    if(this.pService.checkPassword(userName, passWord)) {
      alert('Your Logged in');
    } else {
      alert('Please try again');
    }
  }

}