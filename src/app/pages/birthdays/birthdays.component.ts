import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/main/services/product.service';
import { Iproduct } from 'src/app/main/interfaces/iproduct';
import { SignUpService } from 'src/app/main/services/sign-up.service';
import { SignUp } from 'src/app/main/interfaces/sign-up';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss']
})
export class BirthdaysComponent implements OnInit {
  package = "Birthday Package";
  price = "$200/hr";
  loginInfo: SignUp;
  closeResult: string;
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
  'assets/img/sports/baseball3.JPG',
  'assets/img/sports/baseball4.jpg',
  'assets/img/sports/baseball5.jpg',
  'assets/img/sports/baseball6.HEIC',
   'assets/img/sports/baseball7.JPG',
  ];
  wedding = ['assets/img/wedding/W1.JPG',
  'assets/img/wedding/W2.JPG',
  'assets/img/wedding/W3.JPG',
  'assets/img/wedding/W4.JPG',
  'assets/img/wedding/W5.JPG',
  'assets/img/wedding/W6.JPG',
  'assets/img/wedding/W7.JPG',
  'assets/img/wedding/W8.jpg',];

  constructor(private pService: ProductService, private pS:SignUpService,private modalService: NgbModal) { }


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
    this.loginInfo = this.pS.setLogin();
  }

  packageSelected(){
    this.pService.setProduct(this.package);
    /* this.pService.setProduct(this.price); */
  }
}
