import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private itemsInCart : Profile[] = [];
  private profiles: Profile[] = [
    {
      picture : '',
      name : 'angel',
      email : 'angelpantoja27@gmail.com',
      link : 'https://drive.google.com/drive/u/0/my-drive',
      /* cart: [
        {
          description : 'Had a very good time at the event! Al of the pictures came out Great, would Definitely reccomend!',
          price : '$400',
          pName : "birthday",
          date : '2/2/20'
        },
        {
          description : 'Had a very good time at the event! Al of the pictures came out Great, would Definitely reccomend!',
          price : '$400',
          pName : "birthday",
          date : '2/2/20'
        }
      ] */
    },
  ]
  constructor() { }
  
  getProfile(): Profile[] {
    return this.profiles;
  }

  getItem(name: string): Observable <Profile>{
    return of(
      this.profiles.find(
      z => z.name === name
    )
    );
  }


  addToCart(cartItem : Profile){
    this.itemsInCart.push(cartItem);
    console.log(this.itemsInCart);
  }

  getCartItems(): Profile[] {
    return this.itemsInCart;
  }
}
