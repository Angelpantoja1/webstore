import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReviewsService } from 'src/app/main/services/reviews.service';
import { Ireview } from 'src/app/main/interfaces/ireview';
import { ProductService } from 'src/app/main/services/product.service';
import { SignUp } from 'src/app/main/interfaces/sign-up';
import { SignUpService } from 'src/app/main/services/sign-up.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  providers: [NgbRatingConfig]
})

export class ReviewsComponent implements OnInit {
  closeResult: string;
  visibleSidebar4:any;
  visibleSidebar5:any;
  visibleSidebar6:any;
  visibleSidebar7:any;
  visibleSidebar8:any;
  currentRate:number;
  profiles:any;


  birthdaya = ['assets/img/birthday/birthday.jpg',
    'assets/img/birthday/birthday2.jpg',
    'assets/img/birthday/birthday3.jpg',
    'assets/img/birthday/birthday4.jpg',
    'assets/img/birthday/birthday5.jpg',
    'assets/img/birthday/birthday6.jpg',
    'assets/img/birthday/birthday7.jpg',
    'assets/img/birthday/birthday8.jpg',
  ];
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
    'assets/img/wedding/W8.jpg',
  ];

  userForm: FormGroup;
  reviews: Ireview[];

  name: string;
  date: string;
  desc: string;
  price: string;

  info: object;
  loginInfo: SignUp;



  Review: Ireview = {
    rName: '',
    review: '',
    star: 5

  }
  constructor(private modalService: NgbModal, config: NgbRatingConfig, private formBuilder: FormBuilder, private dService: ReviewsService, private pService: ProductService, private pServ: SignUpService, private rService: ReviewsService) {
    config.max = 5;
    config.readonly = false;
  }


  signUp(rName: string, review: string, star: number) {
    const addThisName: Ireview = {
      rName: rName,
      review: review,
      star: star,
    }
    this.dService.addUser(addThisName)

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
    this.Review = this.rService.setReview();
    this.loginInfo = this.pServ.setLogin();
    // this.userForm = new FormGroup({
    //   fName: new FormControl('', Validators.required),
    //   lName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    //   mName: new FormControl('', Validators.required),
    //   hasMiddleName: new FormControl(false)
    // });
    this.reviews = this.dService.getReview();


    this.userForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', [Validators.required, Validators.minLength(2)]],
      mName: ['', Validators.required],
      hasMiddleName: false
    });

    this.info = this.pService.getConfirmation();
  }

  nameKeypress(e: any) {
    if (e.keyCode == 13) {
      this.name = e.target.value;
      console.log(this.name);
    }
  }

  descKeypress(e: any) {
    if (e.keyCode == 13) {
      this.desc = e.target.value;
      console.log(this.desc);
    }
  }
  dateKeypress(e: any) {
    if (e.keyCode == 13) {
      this.date = e.target.value;
      console.log(this.date);
    }
  }

  setConfirmation() {
    this.pService.setConfirmation(this.name, this.date, this.desc);
  }

  setInfo(rN: string, rew: string) {
    this.Review.rName = rN;
    this.Review.review = rew;
  }

}
