import { Injectable } from '@angular/core';
import { Ipackages } from '../interfaces/ipackages';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packages:Ipackages[] = [
    {
      pName:'Birthday Package',
      price:'$200/hr',
      color:'birthday',
      link: '/birthdays',
      image: '/assets/img/storeImages/BShot.png'
      
    },
    {
      pName:'Family Package',
      price:'$400',
      color:'family',
      link: '/family',
      image:'/assets/img/storeImages/FShot.png'
    },
    {
      pName:'Maternity Package',
      price:'$300',
      color : 'maternity',
      link: '/maternity',
      image:'/assets/img/storeImages/MShot.png'
    },
    {
      pName:'Sports Package',
      price:'$500',
      color : 'sports',
      link: '/sports',
      image:'/assets/img/storeImages/SShot.png'
    },
    {
      pName:'Wedding Package',
      price:'$2,400',
      color : 'wedding',
      link: '/wedding',
      image:'/assets/img/storeImages/WShot.png'
    },
    {
      pName:'Custom Package',
      price:'$TBD',
      color : 'custom',
      link: '/custom',
      image:'/assets/img/storeImages/CShot.png'
    }
  ]

  constructor() { }

  getPackages():Ipackages[]{
    return this.packages;
  }

  getPackage(sku:string): Observable<Ipackages>{
    return of(this.packages.find(x => x.pName === sku
    ));
  }
}
