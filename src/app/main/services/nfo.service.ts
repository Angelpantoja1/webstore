import { Injectable } from '@angular/core';
import { Nfo } from '../interfaces/nfo';

@Injectable({
  providedIn: 'root'
})
export class NfoService {
  info: Nfo;
  
  moreInfo: Nfo = {
   Iname:'Name',
   Idate:'Date',
   Idesc:'Description'
  };
  constructor() { }

  setInfo(){
    return this.moreInfo;
  }
}
