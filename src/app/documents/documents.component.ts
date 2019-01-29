import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const $: any;
// import * as $ from 'jquery';

//models
import { Document } from '../document';

//services
import { DocumentService } from '../document.service'
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  document: Document;
  documents: Document[];
  candidate = this.currentUser.candidate;
  docLabel: string;
  constructor(private documentService: DocumentService) {
    this.document = new Document(-1, this.candidate.user, '', null);
    this.docLabel = 'Choisir le fichier...';
  }

  ngOnInit() {
    this.getDocuments();

    $(document).ready(function () {
      // Activate tooltip
      $('[data-toggle="tooltip"]').tooltip();

      // Select/Deselect checkboxes
      var checkbox = $('table tbody input[type="checkbox"]');
      $("#selectAll").click(function () {
        if (this.checked) {
          checkbox.each(function () {
            this.checked = true;
          });
        } else {
          checkbox.each(function () {
            this.checked = false;
          });
        }
      });
      checkbox.click(function () {
        if (!this.checked) {
          $("#selectAll").prop("checked", false);
        }
      });
    });

  }

  getDocuments(): void {
    this.documentService.getDocuments().subscribe(documents => {
      this.documents = documents;
      // for (let i = 0; i < this.documents.length; i++) console.log('Doc with id: ' + this.documents[i].id);
    });
  }
  submitDocument() {
    console.log('New Document ... ');
    console.log(this.document);
    this.documentService.addDocument(this.document).subscribe(
      response => {
        console.log('Document: ' + this.document.nom + ' is registred');
        this.documents.push(this.document);
      },
      error => console.log('error: ' + error)
    );
    $('#addDocument').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }

  onFileChanged(event) {
    console.log('New File Selected!!!');
    this.document.document = event.target.files[0];
    this.docLabel = event.target.files[0].name;
  }
  deleteDoc(doc: Document) {
    console.log('Removing doc: ' + doc.nom);
    this.document = doc;
  }
  deleteDocument() {
    console.log('DONE .... ');
    console.log(this.document);
    this.documentService.deleteDocument(this.document.id).subscribe();
    const index = this.documents.indexOf(this.document);
    this.documents.splice(index, 1);
    $('#docDeleteModal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
}
