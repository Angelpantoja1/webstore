import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { PackagesComponent } from './pages/packages/packages.component';




const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'home-index', component: HomeIndexComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'maternity', component: MaternityComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'birthdays', component: BirthdaysComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'start-page', component: StartPageComponent },
  { path: 'pay', component: PayComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'info', component: InfoComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'packages', component: PackagesComponent },
  

  { path: '',
    redirectTo: 'home-index',
    pathMatch: 'full'
  },
  { path: '**', component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

