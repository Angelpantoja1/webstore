import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/main/interfaces/profile';
import { ProfileService } from 'src/app/main/services/profile.service';
import { ProductService } from 'src/app/main/services/product.service';
import { Iproduct } from 'src/app/main/interfaces/iproduct';
import { PackageService } from 'src/app/main/services/package.service';
import { ActivatedRoute } from '@angular/router';
import { SignUp } from 'src/app/main/interfaces/sign-up';
import { SignUpService } from 'src/app/main/services/sign-up.service';
import { Nfo } from 'src/app/main/interfaces/nfo';
import { NfoService } from 'src/app/main/services/nfo.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  packageInfo: Iproduct;
  packages: Iproduct[];
  cartItems: Profile[];
  info: object;
  loginInfo: SignUp;
  Info : Nfo;


  constructor(private dService: ProfileService, private pService: ProductService, private packService: PackageService, private route: ActivatedRoute,
    private pS: ProductService, private pServ: SignUpService, private pServe: NfoService) { }

  ngOnInit() {
    this.Info = this.pServe.setInfo();
    this.loginInfo = this.pServ.setLogin();
    this.getPackage();
    this.cartItems = this.dService.getCartItems();
    this.info = this.pService.getConfirmation();
    this.packages = this.pService.getProduct2();
    /* this.packages = this.packages.filter(x => x.pName === 'Birthday Package', x => x.price === '$200/hr'); */
    /* this.packages = this.packages.filter(x => x.pName === 'Family Package', x => x.price === '$400');
    this.packages = this.packages.filter(x => x.pName === 'Maternity Package', x => x.price === '$300');
    this.packages = this.packages.filter(x => x.pName === 'Sports Package', x => x.price === '$500');
    this.packages = this.packages.filter(x => x.pName === 'Wedding Package', x => x.price === '$2,400');
    this.packages = this.packages.filter(x => x.pName === 'Custom Package', x => x.price === '$TBD'); */
    /* console.log(this.packages) */
  }

  getPackage() {
    //const pName = this.route.snapshot.paramMap.get('pName')
    this.packageInfo = this.pS.getProduct();
  }

}
