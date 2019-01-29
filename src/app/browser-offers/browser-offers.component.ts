import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Company } from '../company';
import { Contrat } from '../contrat';
import { Secteur } from '../secteur';
import { Metier } from '../metier';
import { Offre } from '../offre';

//services
import { OffreService } from '../offre.service';
import { DocumentService } from '../document.service';
import { ApplicationService } from '../application.service';
//models
import { Document } from '../document';
import { Candidate } from '../candidate';
import { Application } from '../application';

declare const $: any;


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-browser-offers',
  templateUrl: './browser-offers.component.html',
  styleUrls: ['./browser-offers.component.css']
})
export class BrowserOffersComponent implements OnInit {
  currentUser: any;
  candidate: Candidate;
  offre: Offre;
  offres: Offre[] = [];
  documents: Document[] = [];
  application: Application;
  cv: String;
  other: string = '';
  constructor(private offreService: OffreService, private documentService: DocumentService, private applicationService: ApplicationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.candidate = this.currentUser.candidate;
    this.application = new Application(-1, null, this.candidate, '');
  }

  selectOffer(off: Offre) {
    this.application.offer = off;
  }

  ngOnInit() {
    this.getOffres();
    this.getDocuments();

    $(function () {
      $('div#froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '-', 'paragraphFormat', 'align', 'formatUL', 'formatUL', 'indent', 'outdent', '-', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
        toolbarVisibleWithoutSelection: true
      })
    });
  }
  getOffres(): void {
    this.offreService.getOffres().subscribe(offres => this.offres = offres);
  }
  public options: Object = {
    placeholderText: "Lettre de motivation*",
    charCounterCount: true,
    quickInsertTags: [''],
    toolbarButtons: ['bold', 'italic', 'formatUL', 'undo', 'redo'],
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }
  }

  getDocuments(): void {
    this.documentService.getDocuments().subscribe(documents => this.documents = documents);
  }
  submitApplication() {
    this.application.attachement = [];
    this.application.attachement.push(this.documents.find(doc => doc.nom === this.cv));
    if (this.other !== '') this.application.attachement.push(this.documents.find(doc => doc.nom === this.other));
    console.log('Postuler a ...');
    console.log(this.application);
    this.applicationService.addApplication(this.application).subscribe(
      response => {
        console.log('Application offre : ' + this.application.offer.titre + ' is registred');
      },
      error => console.log('error: ' + error)
    );

    $('#offer').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
  cvOnChange(value) {
    // console.log('CV CHANGING TO ' + value);
    this.cv = value;
  }
  pjOnChange(value) {
    // console.log('pj CHANGING TO ' + value);
    this.other = value;
  }
}
