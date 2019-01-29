import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import '../../assets/js/countrycity.js';
import 'daterangepicker';
import * as jquery from 'jquery';
import * as _ from 'jquery-migrate';
// import '../../assets/js/ion.rangeSlider.js';
import * as ion_rangeslider from 'ion-rangeslider';
import * as gijgo from 'gijgo';
import * as moment from 'moment';
import * as dt from 'daterangepicker';
import * as HSMegaMenu from '../../assets/js/hs.megamenu.js';
// import { Candidate } from '../usertest.js';
import { Candidate } from '../candidate';
// import * as HSMegaMenu from '../../assets/js/vendor/'
// import '../../assets/js/ion.rangeSlider.js';
// import 'jquery';
// import '../../assets/js/jquery-migrate.min.js';
// import 'jquery-migrate';

// import '../../assets/js/gijgo.min.js';


// import 'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js';
// import '../../assets/js/daterangepicker.min.js';
// import 'daterangepicker';
//
// import '../../assets/js/profile.js';
declare const $: any;
import { CandidateService } from '../candidate.service';
import { PhoneService } from '../phone.service'
import { ExperienceService } from '../experience.service';
import { FormationService } from '../formation.service';
import { CompetenceService } from '../competence.service.js';
import { LangueService } from '../langue.service';

// import { CompanyService } from '../company.service';
// import { Country } from '../country.js';

import { City } from '../city';
import { Country } from '../country'
import { from } from 'rxjs';
import { Phone } from '../phone.js';
import { Experience } from '../experience';
import { Formation } from '../formation';
import { Competence } from '../competence';
import { Langue } from '../langue';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  type: string;
  candidate = this.currentUser.candidate;
  countries: Country[];
  phones: Phone[];
  experiences: Experience[];
  formations: Formation[];
  competences: Competence[];
  langues: Langue[];

  sector: string;
  phone = new Phone(-1, this.candidate.user, '', '');
  // code = this.phone.code;
  // number = this.phone.number;
  datenaissanceBool: boolean;
  etatBool: boolean;
  phoneBool: boolean;
  duree: string;
  duree_formation: string;
  experience: Experience;
  formation: Formation;
  competence: Competence;
  langue: Langue;
  // cities: City[];
  // scities: any;
  // test: boolean;
  // private countryService: CountryService, private cityService: CityService
  constructor(private candidateService: CandidateService, private phoneService: PhoneService, private experienceService: ExperienceService, private formationService: FormationService, private competenceService: CompetenceService, private langueService: LangueService) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.candidate = this.currentUser.candidate;
    // this.phone = new Phone(-1, this.candidate.user, '', '');

    console.log('CCCCCCCCCCCCCC');
    console.log(this.candidate);
    this.sector = this.candidate.metier.metier[0].secteur.secteur;
    this.datenaissanceBool = (this.candidate.birthdate == null) ? true : false;
    this.etatBool = (this.candidate.etat_civil == null) ? true : false;
    this.experience = new Experience(-1, this.candidate.user, '', '', '', '');
    this.formation = new Formation(-1, this.candidate.user, '', '', '', '');
    this.competence = new Competence(-1, this.candidate.user, '', 10);
    this.langue = new Langue(-1, this.candidate.user, '', 10);
    this.duree = "";
    this.duree_formation = '';
    console.log('Profile ' + 'candidate' + ' is ... ');
    console.log(this.candidate);
    console.log('TOKEN: ' + this.currentUser.token);
    console.log('PESONAL DATA STATE: datenaissanceBool' + this.candidate.birthdate + ' etatBool: ' + this.etatBool);
  }

  ngOnInit() {
    // this.test = true;
    // this.getCountries();
    // this.getCities('MAR');
    // this.getCities('ARE');
    this.getPhones();
    this.getExperiences();
    this.getFormations();
    this.getCompetences();
    this.getLangues();


    $(function () {

      $('input[name="datefilter"]').daterangepicker({
        "maxDate": "08-04-2018",
        autoUpdateInput: false,
        locale: {
          cancelLabel: 'Clear'
        }
      });
      1
      $('input[name="datefiltersc"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
          cancelLabel: 'Clear'
        }
      });

      $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
      });

      $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
      });


      $('input[name="datefiltersc"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
      });

      $('input[name="datefiltersc"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
      });
    });

    $(function () {

      $("#range").ionRangeSlider({
        min: 0,
        max: 100,
        from: 10,
        postfix: "%"
      });

      $("#nrange").ionRangeSlider({
        min: 0,
        max: 100,
        from: 10,
        postfix: "%"
      });

    });
    var date = this.datenaissanceBool ? '1995-01-01' : this.candidate.birthdate;
    $(document).ready(function () {

      $('#datepicker').datepicker({
        format: 'yyyy-mm-dd',
        value: date,
        minDate: '1934-12-12',
        maxDate: '2001-12-12',
        uiLibrary: 'bootstrap4',
      });
    });
    $(window).on('load', function () {
      // initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 991,
        hideTimeOut: 0
      });

    });

    /*
      dt.$('#datepicker').datepicker({
        format: 'yyyy-mm-dd',
        value: '1995-01-01',
        minDate: '1934-12-12',
        maxDate: '2001-12-12',
        uiLibrary: 'bootstrap4',
      });
    */

  }
  submitPersonalData() {
    console.log('Update Personal Data ...');
    console.log(this.candidate);
    console.log('Phone Number...');
    console.log(this.phone);
    this.candidateService.updateCandidate(this.candidate)
      .subscribe(response => {
        console.log('User: ' + this.candidate.user.first_name + 'has been registred');
        // this.router.navigate(['home']);
      },
        error => console.log('error: ' + error)
      );
    if (this.phoneBool) {
      this.phoneService.addPhone(this.phone).subscribe(
        response => {
          console.log('Phone: ' + this.phone.number + ' is registred');
          this.phoneBool = false;
          // this.router.navigate(['home']);
        },
        error => console.log('error: ' + error)
      );
    } else {
      //update Phone Number
      this.phoneService.updatePhone(this.phone).subscribe(
        response => {
          console.log('Phone: ' + this.phone.number + ' is Updated');
          this.phoneBool = false;
        },
        error => console.log('error: ' + error)
      );
    }
    $('#exampleModal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
  getPhones(): void {
    this.phoneService.getPhones().subscribe(phones => {
      this.phones = phones;
      if (this.phones.length > 0) this.phone = this.phones[0];
      this.phoneBool = (this.phones.length == 0) ? true : false;
    });
    // console.log('IN COMPONENT: ');
    // console.log(this.fields);
  }

  getCompetences(): void {
    this.competenceService.getCompetences().subscribe(competences => {
      this.competences = competences;
    });
  }
  getLangues(): void {
    this.langueService.getLangues().subscribe(langues => {
      this.langues = langues;
    });
  }


  submitExperience() {
    console.log('New Experience ... ');
    var res = this.duree.split(' - ');
    // console.log('Duree: ' + res[1]);
    this.experience.start_date = res[0];
    this.experience.end_date = res[1];
    console.log(this.experience);
    this.experienceService.addExperience(this.experience).subscribe(
      response => {
        console.log('Experience: ' + this.experience.intitule + ' is registred');
        this.experiences.push(this.experience);
      },
      error => console.log('error: ' + error)
    );
    $('#workModal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
  getExperiences(): void {
    this.experienceService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
    });
  }
  //formationService
  submitFormation() {
    console.log('New Formation ... ');
    var res = this.duree_formation.split(' - ');
    // console.log('Duree: ' + res[1]);
    this.formation.start_date = res[0];
    this.formation.end_date = res[1];
    console.log(this.formation);
    this.formationService.addFormation(this.formation).subscribe(
      response => {
        console.log('Formation: ' + this.formation.diplome + ' is registred');
        this.formations.push(this.formation);
      },
      error => console.log('error: ' + error)
    );
    $('#educationModal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
  getFormations(): void {
    this.formationService.getFormations().subscribe(formations => {
      this.formations = formations;
    });
  }


  submitCompetence() {
    console.log('New Competence ... ');
    console.log(this.competence);
    this.competenceService.addCompetence(this.competence).subscribe(
      response => {
        console.log('Competence: ' + this.competence.competence + ' is registred');
        this.competences.push(this.competence);
      },
      error => console.log('error: ' + error)
    );
    $('#skillModal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
  submitLangue() {
    console.log('New Langue ... ');
    console.log(this.langue);
    this.langueService.addLangue(this.langue).subscribe(
      response => {
        console.log('Langue: ' + this.langue.langue + ' is registred');
        this.langues.push(this.langue);
      },
      error => console.log('error: ' + error)
    );
    $('#languageModal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }

  submitAbout() {
    this.candidateService.updateCandidate(this.candidate)
      .subscribe(response => {
        console.log('User: ' + this.candidate.user.first_name + 'has been registred');
        // this.router.navigate(['home']);
      },
        error => console.log('error: ' + error)
      );
      $('#about').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
  }
  /*
    cities => this.cities = cities, response => {
      // this.scities.push({ country: JSON.stringify(this.cities) });
      console.log(this.cities)
    */

  /*
  getCountries(): void {
    this.countryService.getCountries().subscribe(coutries => this.countries = coutries);
    // console.log('IN COMPONENT: ');
    // console.log(this.fields);
  }
  getCities(country: string): void {
    console.log('FETCHING CITIES OF ' + country);
    this.scities = [];
    
    this.cityService.getCities().subscribe(
      data => {
        this.cities = data;
        // this.key = this.countries[country]
        let vr = {};
        let key = this.countries.find(obj => { return obj.code === country });
        vr[key.name] = JSON.stringify(this.cities.map(a => a.name));
        this.scities.push(vr);
        console.log(this.scities);
        // this.test = false;
      });
    // console.log('IN COMPONENT: ');
    // console.log(this.fields);
  }
*/


}