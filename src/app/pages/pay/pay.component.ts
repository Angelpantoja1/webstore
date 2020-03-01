import { Component, OnInit } from '@angular/core';
import { Pay } from 'src/app/main/interfaces/pay';
import { PayService } from 'src/app/main/services/pay.service';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  payments:Pay ={
    namePay:'',
    emailPay:'',
    number: 0,
    cardInfo:'',
    cvv:'',

  }

  blockSpecial: RegExp = /^[^<>*!]+$/ 
    
  blockSpace: RegExp = /[^\s]/; 
  
  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; 
    
  cc: string; 
  cvv: any; 

  constructor(private pServ:PayService) { }

  ngOnInit() {
  }
  


}
