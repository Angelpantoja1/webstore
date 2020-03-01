import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'primeng/lightbox';
import {KeyFilterModule} from 'primeng/keyfilter';
import {PasswordModule} from 'primeng/password';
import {SidebarModule} from 'primeng/sidebar';
import {CarouselModule} from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeIndexComponent } from './pages/home-index/home-index.component';
import { WeddingComponent } from './pages/wedding/wedding.component';
import { MaternityComponent } from './pages/maternity/maternity.component';
import { FamilyComponent } from './pages/family/family.component';
import { BirthdaysComponent } from './pages/birthdays/birthdays.component';
import { SportsComponent } from './pages/sports/sports.component';
import { CustomComponent } from './pages/custom/custom.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { PayComponent } from './pages/pay/pay.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { InfoComponent } from './pages/info/info.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './header/header.component';
import { PackagesComponent } from './pages/packages/packages.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeIndexComponent,
    WeddingComponent,
    MaternityComponent,
    FamilyComponent,
    BirthdaysComponent,
    SportsComponent,
    CustomComponent,
    SignInComponent,
    CreateAccountComponent,
    PagenotfoundComponent,
    CheckOutComponent,
    ReviewsComponent,
    ContactComponent,
    StartPageComponent,
    PayComponent,
    ProfileComponent,
    ThankYouComponent,
    InfoComponent,
    PortfolioComponent,
    ConfirmationComponent,
    ProductsComponent,
    HeaderComponent,
    PackagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CalendarModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    LightboxModule,
    KeyFilterModule,
    PasswordModule,
    SidebarModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
