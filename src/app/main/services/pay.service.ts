import { Injectable } from '@angular/core';
import { Pay } from '../interfaces/pay';

@Injectable({
  providedIn: 'root'
})
export class PayService {
  payment :Pay;

  payments:Pay ={
    namePay:'string',
    emailPay:'string',
    number: 0,
    cardInfo:'string',
    cvv:'string',

  }

  constructor() { }
}
