import { Component, OnInit } from '@angular/core';
import { Ipackages } from 'src/app/main/interfaces/ipackages';
import { PackageService } from 'src/app/main/services/package.service';
import { SignUp } from 'src/app/main/interfaces/sign-up';
import { SignUpService } from 'src/app/main/services/sign-up.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  closeResult: string;

  visibleSidebar4: any;
  visibleSidebar5: any;
  visibleSidebar6: any;
  visibleSidebar7: any;
  visibleSidebar8: any;
  /*  birthday: any[];
   family: any[];
   maternity: any[];
   sports: any[];
   wedding: any[]; */

  birthdaya = ['assets/img/birthday/birthday.jpg',
    'assets/img/birthday/birthday2.jpg',
    'assets/img/birthday/birthday3.jpg',
    'assets/img/birthday/birthday4.jpg',
    'assets/img/birthday/birthday5.jpg',
    'assets/img/birthday/birthday6.jpg',
    'assets/img/birthday/birthday7.jpg',
    'assets/img/birthday/birthday8.jpg',];
  family = ['assets/img/family/family.jpg',
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
  sports = ['assets/img/sports/baseball.JPG',
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

  packageList: Ipackages[];
  loginInfo: SignUp;
  active: any;
  reviews: any;
  constructor(private pService: PackageService, private pS: SignUpService, private modalService: NgbModal, config: NgbRatingConfig) {
    // this.birthday = [];
    // this.birthday.push({ source: 'assets/img/birthday/birthday.jpg', thumbnail: 'assets/img/birthday/birthdaySmall.jpg', title: 'Birthday 1' });
    // this.birthday.push({ source: 'assets/img/birthday/birthday2.jpg', thumbnail: 'assets/img/birthday/birthday2Small.jpg', title: 'Birthday 2' });
    // this.birthday.push({ source: 'assets/img/birthday/birthday3.jpg', thumbnail: 'assets/img/birthday/birthday3Small.jpg', title: 'Birthday 3' });
    // this.birthday.push({ source: 'assets/img/birthday/birthday4.jpg', thumbnail: 'assets/img/birthday/birthday4Small.jpg', title: 'Birthday 4' });
    // this.birthday.push({ source: 'assets/img/birthday/birthday5.jpg', thumbnail: 'assets/img/birthday/birthday5Small.jpg', title: 'Birthday 5' });
    // this.birthday.push({ source: 'assets/img/birthday/birthday6.jpg', thumbnail: 'assets/img/birthday/birthday6Small.jpg', title: 'Birthday 6' });
    // this.birthday.push({ source: 'assets/img/birthday/birthday7.jpg', thumbnail: 'assets/img/birthday/birthday7Small.jpg', title: 'Birthday 7' });
    // this.birthday.push({ source: 'assets/img/birthday/birthday8.jpg', thumbnail: 'assets/img/birthday/birthday8Small.jpg', title: 'Birthday 8' });
    // this.family = [];
    // this.family.push({ source: 'assets/img/family/family.jpg', thumbnail: 'assets/img/family/familySmall.jpg', title: 'Family 1' });
    // this.family.push({ source: 'assets/img/family/family2.jpg', thumbnail: 'assets/img/family/family2Small.jpg', title: 'Family 2' });
    // this.family.push({ source: 'assets/img/family/family3.jpg', thumbnail: 'assets/img/family/family3Small.jpg', title: 'Family 3' });
    // this.family.push({ source: 'assets/img/family/family4.jpg', thumbnail: 'assets/img/family/family4Small.jpg', title: 'Family 4' });
    // this.family.push({ source: 'assets/img/family/family5.jpg', thumbnail: 'assets/img/family/family5Small.jpg', title: 'Family 5' });
    // this.family.push({ source: 'assets/img/family/family6.jpg', thumbnail: 'assets/img/family/family6Small.jpg', title: 'Family 6' });
    // this.family.push({ source: 'assets/img/family/family7.jpg', thumbnail: 'assets/img/family/family7Small.jpg', title: 'Family 7' });
    // this.family.push({ source: 'assets/img/family/family8.jpg', thumbnail: 'assets/img/family/family8Small.jpg', title: 'Family 8' });
    // this.maternity = [];
    // this.maternity.push({ source: 'assets/img/maternity/M9.jpg', thumbnail: 'assets/img/maternity/m9Small.jpg', title: 'Maternity 1' });
    // this.maternity.push({ source: 'assets/img/maternity/M1.jpg', thumbnail: 'assets/img/maternity/m1Small.jpg', title: 'Maternity 2' });
    // this.maternity.push({ source: 'assets/img/maternity/M2.jpg', thumbnail: 'assets/img/maternity/m2Small.jpg', title: 'Maternity 3' });
    // this.maternity.push({ source: 'assets/img/maternity/M3.jpg', thumbnail: 'assets/img/maternity/m3Small.jpg', title: 'Maternity 4' });
    // this.maternity.push({ source: 'assets/img/maternity/M5.jpg', thumbnail: 'assets/img/maternity/m5Small.jpg', title: 'Maternity 5' });
    // this.maternity.push({ source: 'assets/img/maternity/M6.jpg', thumbnail: 'assets/img/maternity/m6Small.jpg', title: 'Maternity 6' });
    // this.maternity.push({ source: 'assets/img/maternity/M7.jpg', thumbnail: 'assets/img/maternity/m7Small.jpg', title: 'Maternity 7' });
    // this.maternity.push({ source: 'assets/img/maternity/M8.jpg', thumbnail: 'assets/img/maternity/m8Small.jpg', title: 'Maternity 8' });
    // this.sports = [];
    // this.sports.push({ source: 'assets/img/sports/baseball.jpg', thumbnail: 'assets/img/sports/baseballSmall.jpg', title: 'Baseball 1' });
    // this.sports.push({ source: 'assets/img/sports/baseball2.jpg', thumbnail: 'assets/img/sports/baseball2Small.jpg', title: 'Baseball 2' });
    // this.sports.push({ source: 'assets/img/sports/basketball.jpg', thumbnail: 'assets/img/sports/basketballSmall.jpg', title: 'BasketBall 1' });
    // this.sports.push({ source: 'assets/img/sports/basketball2.jpg', thumbnail: 'assets/img/sports/basketball2Small.jpg', title: 'BasketBall 2' });
    // this.sports.push({ source: 'assets/img/sports/football.jpg', thumbnail: 'assets/img/sports/footballSmall.jpg', title: 'Football 1' });
    // this.sports.push({ source: 'assets/img/sports/football2.jpg', thumbnail: 'assets/img/sports/football2Small.jpg', title: 'Football 2' });
    // this.sports.push({ source: 'assets/img/sports/soccer.jpg', thumbnail: 'assets/img/sports/soccerSmall.jpg', title: 'Soccer 1' });
    // this.sports.push({ source: 'assets/img/sports/soccer2.jpg', thumbnail: 'assets/img/sports/soccer2Small.jpg', title: 'Soccer 2' });
    // this.wedding = [];
    // this.wedding.push({ source: 'assets/img/wedding/W1.JPG', thumbnail: 'assets/img/wedding/w1Small.JPG', title: 'Wedding 1' });
    // this.wedding.push({ source: 'assets/img/wedding/W2.JPG', thumbnail: 'assets/img/wedding/w2Small.JPG', title: 'Wedding 2' });
    // this.wedding.push({ source: 'assets/img/wedding/W3.JPG', thumbnail: 'assets/img/wedding/w3Small.JPG', title: 'Wedding 3' });
    // this.wedding.push({ source: 'assets/img/wedding/W4.JPG', thumbnail: 'assets/img/wedding/w4Small.JPG', title: 'Wedding 4' });
    // this.wedding.push({ source: 'assets/img/wedding/W5.JPG', thumbnail: 'assets/img/wedding/w5Small.JPG', title: 'Wedding 5' });
    // /* this.wedding.push({ source: 'assets/img/wedding/W6.JPG', thumbnail: 'assets/img/wedding/w6Small.JPG', title: 'Wedding 6' }); */
    // this.wedding.push({ source: 'assets/img/wedding/W7.JPG', thumbnail: 'assets/img/wedding/w7Small.JPG', title: 'Wedding 7' });
    // this.wedding.push({ source: 'assets/img/wedding/W8.jpg', thumbnail: 'assets/img/wedding/w8Small.jpg', title: 'Wedding 8' });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.packageList = this.pService.getPackages();
    this.loginInfo = this.pS.setLogin();
  }

}
