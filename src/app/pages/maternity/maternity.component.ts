import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/main/services/product.service';
import { SignUp } from 'src/app/main/interfaces/sign-up';
import { SignUpService } from 'src/app/main/services/sign-up.service';

@Component({
  selector: 'app-maternity',
  templateUrl: './maternity.component.html',
  styleUrls: ['./maternity.component.scss']
})
export class MaternityComponent implements OnInit {
  package = "Maternity Package";
  price = "$300";
  loginInfo: SignUp;

  visibleSidebar4:any;
  visibleSidebar5:any;
  visibleSidebar6:any;
  visibleSidebar7:any;
  visibleSidebar8:any;
  profiles:any;
  reviews:any;

  birthdaya = [ 'assets/img/birthday/birthday.jpg',
  'assets/img/birthday/birthday2.jpg',
  'assets/img/birthday/birthday3.jpg',
  'assets/img/birthday/birthday4.jpg',
  'assets/img/birthday/birthday5.jpg',
  'assets/img/birthday/birthday6.jpg',
  'assets/img/birthday/birthday7.jpg',
  'assets/img/birthday/birthday8.jpg',];
  family = [ 'assets/img/family/family.jpg',
  'assets/img/family/family2.jpg',
  'assets/img/family/family3.jpg',
  'assets/img/family/family4.jpg',
  'assets/img/family/family5.jpg',
  'assets/img/family/family6.jpg',
  'assets/img/family/family7.jpg',
  'assets/img/family/family8.jpg',];
  maternity = ['assets/img/maternity/M9.jpg',
  'assets/img/maternity/M1.jpg',
  'assets/img/maternity/M2.jpg',
  'assets/img/maternity/M3.jpg',
  'assets/img/maternity/M5.jpg',
  'assets/img/maternity/M6.jpg',
  'assets/img/maternity/M7.jpg',
  'assets/img/maternity/M8.jpg',];
  sports = [ 'assets/img/sports/baseball.JPG',
  'assets/img/sports/baseball2.JPG', 
  'assets/img/sports/basketball.jpg',
  'assets/img/sports/basketball2.jpg',
  'assets/img/sports/football.jpg',
  'assets/img/sports/football2.jpg',
   'assets/img/sports/soccer.jpg',
   'assets/img/sports/soccer2.jpg',];
  wedding = ['assets/img/wedding/W1.JPG',
  'assets/img/wedding/W2.JPG',
  'assets/img/wedding/W3.JPG',
  'assets/img/wedding/W4.JPG',
  'assets/img/wedding/W5.JPG',
  'assets/img/wedding/W6.JPG',
  'assets/img/wedding/W7.JPG',
  'assets/img/wedding/W8.jpg',];
  constructor(private pService: ProductService,  private pS:SignUpService) { }

  ngOnInit() {
    this.loginInfo = this.pS.setLogin();
  }
  packageSelected(){
    this.pService.setProduct(this.package);
    /* this.pService.setProduct(this.price); */
  }
}
