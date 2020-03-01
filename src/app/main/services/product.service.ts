import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  price = 200;
  products: Iproduct[] = [
    {
      pName: 'Birthday Package',
      description: '',
      price: '$200/hr',
      date: ''
    },
    {
      pName: 'Family Package',
      description: '',
      price: '$400',
      date: ''
    },
    {
      pName: 'Maternity Package',
      description: '',
      price: '$300',
      date: ''
    },
    {
      pName: 'Sports Package',
      description: '',
      price: '$500',
      date: ''
    },
    {
      pName: 'Wedding Package',
      description: '',
      price: '$2,400',
      date: ''
    },
    {
      pName: 'Custom Package',
      description: '',
      price: '$TBD',
      date: ''
    },
  ]
  productSelected: Iproduct;
  enteredInfo: object;
  confimationInfo: object;
  constructor() { }

  setProduct(products: string, /* price: string */) {

    this.productSelected = this.products.find(
      x => x.pName === products
    );
  }
  getProduct() {
    return this.productSelected;
  } 
   
  getProduct2(): Iproduct[] {
    return this.products; 
    /*  return this.productSelected; */
  }

  setInfo(info: object) {
    this.enteredInfo = info
  }

  getInfo() {
    return this.enteredInfo;
  }

  setConfirmation(name: string, date: string, desc: string) {
    this.confimationInfo = {
      name,
      date,
      desc,
      /* price: this.price */
    }
  }
  findPackagePrice(){

  }
  getConfirmation() {
    return this.confimationInfo;
  }

}
 


/* 

import { Injectable } from '@angular/core';
import { Iproduct } from 'src/app/main/interfaces/iproduct';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  shoppingBag: Iproduct[] = [];
  $shoppingBag = new BehaviorSubject<Iproduct[]>(this.shoppingBag);
  products: Iproduct[] = [
    {
      pName: 'Birthday Package',
      description: '',
      price: '$200',
      date: ''
    },
    {
      pName: 'Family Package',
      description: '',
      price: '$400',
      date: ''
    },
    {
      pName: 'Maternity Package',
      description: '',
      price: '$300',
      date: ''
    },
    {
      pName: 'Sports Package',
      description: '',
      price: '$500',
      date: ''
    },
    {
      pName: 'Wedding Package',
      description: '',
      price: '$2,400',
      date: ''
    },
    {
      pName: 'Custom Package',
      description: '',
      price: '$TBD',
      date: ''
    },
  ];
  constructor() { }
  getProducts(): Iproduct[] {
    return this.products;
  }
  getProduct(pkgName: string): Observable<Iproduct> {
    return of(
      this.products.find(
        somethingElse => somethingElse.pName === pkgName
      ));
  }
} */