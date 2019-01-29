import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from "angular-6-social-login";
import { SigninComponent } from './signin/signin.component';
import { SimpleauthComponent } from './simpleauth/simpleauth.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanysignupComponent } from './companysignup/companysignup.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { BrowserOffersComponent } from './browser-offers/browser-offers.component';
import { DocumentsComponent } from './documents/documents.component';
import { OfferComponent } from './offer/offer.component';
// Configs 
/*
{
  id: FacebookLoginProvider.PROVIDER_ID,
  provider: new FacebookLoginProvider("Your-Facebook-app-id")
},
{
  id: LinkedinLoginProvider.PROVIDER_ID,
  provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
},
*/

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("984139448937-iit21tjg2qamb4g4t2lhb10ma4aor45q.apps.googleusercontent.com")
      }
    ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SimpleauthComponent,
    MenuComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    CompanysignupComponent,
    CompanyprofileComponent,
    NewOfferComponent,
    BrowserOffersComponent,
    DocumentsComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }