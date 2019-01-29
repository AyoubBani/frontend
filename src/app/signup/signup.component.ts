import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// import { Field } from '../field';
import { Secteur } from '../secteur';
import { Metier } from '../metier';
import { Phone } from '../phone';
import { Specialite } from '../specialite'
import { MyUser } from '../myUser';
import { Candidate } from '../candidate';
import { Country } from '../country';
import { City } from '../city';
import { Candidate as Candi } from '../usertest';


// import { FieldsService } from '../fields.service';
import { SecteurService } from '../secteur.service';
import { MetierService } from '../metier.service';
import { CountryService } from '../country.service';
import { CityService } from '../city.service';
import { CandidateService } from '../candidate.service';
import { from } from 'rxjs';

export interface MetierIt {
  value: string;
  viewValue: string;
}

export interface MetierGroup {
  disabled?: boolean;
  name: string;
  metiers: MetierIt[];
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // fields: Field[];
  secteurs: Secteur[];
  metiers: Metier[];
  countries: Country[];
  cities: City[];
  selectedCities: City[];
  metiersInterface: MetierGroup[] = [];
  //'ayoub', 'ayoub@gmail.com', 'pass123Hero$'
  // domaine = new Field();
  // file = new File();
  city = new City(-1, "Unknown", "Unknown");
  muser = new MyUser(-1, "", "", "", "", null, this.city, '');
  // sct: string;
  // nat = new Country("UNK", "Unknown");
  // resCountry = new Country("UNK", "Unknown");
  secteur = new Secteur(-1, '');
  metier = new Metier(-1, this.secteur, '');
  specialite = new Specialite(-1, this.metier, '1');
  candidate = new Candidate(this.muser, this.specialite);
  mcd = new Candi("alim@outlook.com", "Ali", "mohammadi", "Immobilier", "pass123Hero$");
  submitted = false;

  constructor(private secteurService: SecteurService, private metierService: MetierService, private countryService: CountryService, private cityService: CityService, private candidateService: CandidateService, private router: Router) { 
    // console.log(this.candidate.specialite.experience)
  }

  ngOnInit() {
    // this.getFields();
    this.getCountries();
    this.getCities();
    // this.getSecteurs();
    this.getMetiers();
  }
  getSecteurs(): void {
    this.secteurService.getSecteurs().subscribe(secteurs => this.secteurs = secteurs);
  }
  getMetiers(): void {
    this.metierService.getMetiers().subscribe(
      // response => {
      (metiers: Metier[]) => {
        // metiers => this.metiers = metiers;
        this.metiers = metiers;
        console.log('METIER FFFF ');
        console.log(this.metiers);
        let test = this.metiers[0].secteur.secteur;
        let k = -1;
        // this.metiersInterface = new Array()
        // let i = 0; i < this.metiers.length; i++
        for (let i in this.metiers) {
          if ((k == -1) || (test != this.metiers[i].secteur.secteur)) {
            test = this.metiers[i].secteur.secteur;
            k++;
            // this.metiersInterface[k].name = test;
            // [k].name = test
            // let mt : MetierGroup;            
            this.metiersInterface.push({
              name: test,
              metiers: []
            });
          }
          this.metiersInterface[k].metiers.push({ value: this.metiers[i].metier, viewValue: this.metiers[i].metier })
        }

      }
      // }
    );
  }
  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }
  getCities(): void {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }
  /*
    getFields(): void {
      this.fieldService.getFields().subscribe(fields => this.fields = fields);
      // console.log('IN COMPONENT: ');
      // console.log(this.fields);
    }
  */
  onFileChanged(event) {
    this.candidate.user.profile_image = event.target.files[0];
  }


  onSubmit() {
    // this.submitted = true;
    // console.log('Saving Candidate: ');
    // console.log(this.candidate);
    console.log(this.diagnostic);
    this.candidateService.addCandidate(this.candidate)
      .subscribe(response => {
        console.log('User: ' + this.candidate.user.first_name + 'has been registred');
        this.router.navigate(['home']);
      },
        error => console.log('error: ' + error)
      );

  }

  // TODO: Remove this when we're done
  get diagnostic() {
    console.log('STRINGIFY OBJECT: ');
    // console.log('City is: ' + this.sct);
    console.log(JSON.stringify(this.candidate));
    return JSON.stringify(this.candidate);
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
    this.candidate.user.ville.id = value;
  }
  metierOnChange(value) {
    this.candidate.metier.metier.metier = value;
  }
}
