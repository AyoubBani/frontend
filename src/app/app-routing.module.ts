import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanysignupComponent } from './companysignup/companysignup.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { BrowserOffersComponent } from './browser-offers/browser-offers.component';
import {DocumentsComponent} from './documents/documents.component';
import {OfferComponent} from './offer/offer.component'
// import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'csignup', component: CompanysignupComponent },
  { path: 'companyprofile', component: CompanyprofileComponent },
  { path: 'newoffer', component: NewOfferComponent },
  { path: 'offres', component: BrowserOffersComponent },
  { path: 'my_documents', component: DocumentsComponent },
  { path: 'offer/:id', component: OfferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }