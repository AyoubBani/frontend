import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../company';
import { MyUser } from '../myUser';
import { Country } from '../country';
import { City } from '../city';

import { CountryService } from '../country.service';
import { CityService } from '../city.service';
import { CompanyService } from '../company.service';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-companysignup',
  templateUrl: './companysignup.component.html',
  styleUrls: ['./companysignup.component.css']
})
export class CompanysignupComponent implements OnInit {
  countries: Country[];
  cities: City[];
  selectedCities: City[];

  city = new City(-1, "Unknown", "Unknown");
  muser = new MyUser(-1, "", "", "", "", null, this.city, '');
  company = new Company(this.muser, '', '', '');
  constructor(private companyService: CompanyService, private countryService: CountryService, private cityService: CityService, private router: Router) { }

  ngOnInit() {
    this.getCountries();
    this.getCities();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }
  getCities(): void {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }


  onFileChanged(event) {
    this.company.user.profile_image = event.target.files[0];
  }

  onSubmit() {
    console.log(this.diagnostic);  
    this.companyService.addCompany(this.company)
      .subscribe(response => {
        console.log('User: ' + this.company.company_name + 'has been registred');
        this.router.navigate(['home']);
      },
        error => console.log('error: ' + error)
      );
  }

  onChange(val) {
    if (val != '') {
      console.log('Selected Value is: ' + val);
      this.selectedCities = [];
      for (let key in this.cities) {
        if (this.cities[key].country == val) {
          this.selectedCities.push(this.cities[key]);
        }
      }
    }
  }
  cityOnChange(value) {
    // console.log('NW CT IS: '+value)
    // this.sct = value;
    this.company.user.ville.id = value;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    console.log('STRINGIFY OBJECT: ');
    // console.log('City is: ' + this.sct);
    console.log(JSON.stringify(this.company));
    return JSON.stringify(this.company);
  }
}
