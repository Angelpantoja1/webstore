import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ireview } from '../interfaces/ireview';
@Injectable({
  providedIn: 'root'
})

export class ReviewsService {
  review: Ireview;

  reviews: Ireview = {
    rName: 'name',
    review: "review",
    star: 5
  };

  reviewsThing: Ireview[] = [/* 
    {
      rName: 'name',
      review: "review",
      star: 5
    } */
  ]
  constructor() { }

  getReview(): Ireview[] {
    return this.reviewsThing;
  }

  getItem(rName: string): Observable<Ireview> {
    return of(
      this.reviewsThing.find(
        z => z.rName === rName
      )
    );
  }

  setReview() {
    return this.reviews;
  }

  addUser(userAccount: Ireview) {
    /* const userAccount :User = {
      userName: uN.toLowerCase(),
      passWord: pW
    }; */
    this.reviewsThing.push(userAccount);
    localStorage.setItem('user', JSON.stringify(this.reviewsThing));
    console.log(this.reviewsThing);
  }

  setUserList(){
    if(JSON.parse(localStorage.getItem('user'))){
      this.reviewsThing = JSON.parse(localStorage.getItem('user'));
    }
  }

}
