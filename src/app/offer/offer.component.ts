import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

//services
import { OffreService } from '../offre.service';
import { ApplicationService } from '../application.service';

//models
import { Offre } from '../offre';
import { Application } from '../application';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  id: number;
  offre: Offre;
  offres: Offre[] = [];
  applications: Application[] = [];
  letterMotivation : string;
  constructor(private route: ActivatedRoute, private offreService: OffreService, private applicationService: ApplicationService) {

    this.route.params.subscribe(params => {
      // console.log(params);
      this.id = params['id'];
      console.log('id is : ' + this.id);
      this.offre = new Offre(this.id, '', '', 0.00, '', null, null, null);
    });
  }

  ngOnInit() {
    this.getOffres();
    this.getApplications();
  }

  getOffres(): void {
    this.offreService.getOffres().subscribe(offres => {
      this.offres = offres;
      for (let i = 0; i < this.offres.length; i++) {
        if (this.offres[i].id == this.id) {
          console.log('FOUND THE OFFER YAY!!!');
          this.offre = this.offres[i];
        }
      }
    });
  }

  getApplications(): void {
    this.applicationService.getApplications().subscribe(applications => {
      // this.applications = applications;
      for (let i = 0; i < applications.length; i++) {
        // console.log('app '+i);
        // let oid = applications[i].offer;
        // console.log(applications[i].offer);
        if (applications[i].offer.id == this.id) {
          // console.log('FOUND THE OFFER YAY!!!');
          // this.offre = this.offres[i];
          this.applications.push(applications[i]);
        }
      }
    });
  }

  letter(app: Application): void {
    this.letterMotivation = app.lettre_motivation;
  }

}
