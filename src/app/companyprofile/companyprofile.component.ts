import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import '../../../node_modules/jquery-waypoints/waypoints.min.js';
// import '../../../node_modules/jquery-countto/jquery.countTo.js';

import { Company } from '../company';
import { Contrat } from '../contrat';
import { Secteur } from '../secteur';
import { Metier } from '../metier';

//services
import { CompanyService } from '../company.service';
import { ContratService } from '../contrat.service';
import { OffreService } from '../offre.service';
import { SecteurService } from '../secteur.service';
import { MetierService } from '../metier.service';
declare const $: any;
// import * as $ from 'jquery';


import { Offre } from '../offre';
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
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {
  currentUser: any;
  company: Company;
  contrats: Contrat[];
  offreContrat: Contrat;
  offre: Offre;
  offres: Offre[] = [];
  secteurs: Secteur[];
  metiers: Metier[];
  metiersInterface: MetierGroup[] = [];
  secteur = new Secteur(-1, '');
  metier = new Metier(-1, this.secteur, '');
  public editorContent: string = '';

  constructor(private secteurService: SecteurService, private metierService: MetierService, private companyService: CompanyService, private contratService: ContratService, private offreService: OffreService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.company = this.currentUser.company;
    this.offreContrat = new Contrat(-1, '');
    this.offre = new Offre(-1, '', '', 0.00, '', this.offreContrat, this.company, this.metier)
    console.log('Company Profile .. ');
    console.log(this.company);

  }

  ngOnInit() {
    this.getContrats();
    this.getMetiers();
    this.getOffres();
    $(function () {
      $('div#froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '-', 'paragraphFormat', 'align', 'formatUL', 'formatUL', 'indent', 'outdent', '-', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
        toolbarVisibleWithoutSelection: true
      })
    });


    ; (function () {

      'use strict';



      var isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };

      var fullHeight = function () {

        if (!isMobile.any()) {
          $('.js-fullheight').css('height', $(window).height());
          $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
          });
        }

      };


      var counter = function () {
        $('.js-counter').countTo({
          formatter: function (value, options) {
            return value.toFixed(options.decimals);
          },
        });
      };


      var counterWayPoint = function () {
        if ($('#colorlib-counter').length > 0) {
          $('#colorlib-counter').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {
              setTimeout(counter, 400);
              $(this.element).addClass('animated');
            }
          }, { offset: '90%' });
        }
      };

      // Animations
      var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

          if (direction === 'down' && !$(this.element).hasClass('animated')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function () {

              $('body .animate-box.item-animate').each(function (k) {
                var el = $(this);
                setTimeout(function () {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn animated');
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft animated');
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight animated');
                  } else {
                    el.addClass('fadeInUp animated');
                  }

                  el.removeClass('item-animate');
                }, k * 200, 'easeInOutExpo');
              });

            }, 100);

          }

        }, { offset: '85%' });
      };


      var burgerMenu = function () {

        $('.js-colorlib-nav-toggle').on('click', function (event) {
          event.preventDefault();
          var $this = $(this);

          if ($('body').hasClass('offcanvas')) {
            $this.removeClass('active');
            $('body').removeClass('offcanvas');
          } else {
            $this.addClass('active');
            $('body').addClass('offcanvas');
          }
        });



      };

      // Click outside of offcanvass
      var mobileMenuOutsideClick = function () {

        $(document).click(function (e) {
          var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {

            if ($('body').hasClass('offcanvas')) {

              $('body').removeClass('offcanvas');
              $('.js-colorlib-nav-toggle').removeClass('active');

            }

          }
        });

        $(window).scroll(function () {
          if ($('body').hasClass('offcanvas')) {

            $('body').removeClass('offcanvas');
            $('.js-colorlib-nav-toggle').removeClass('active');

          }
        });

      };

      var clickMenu = function () {

        $('#navbar a:not([class="external"])').click(function (event) {
          var section = $(this).data('nav-section'),
            navbar = $('#navbar');

          if ($('[data-section="' + section + '"]').length) {
            $('html, body').animate({
              scrollTop: $('[data-section="' + section + '"]').offset().top - 55
            }, 500);
          }

          if (navbar.is(':visible')) {
            navbar.removeClass('in');
            navbar.attr('aria-expanded', 'false');
            $('.js-colorlib-nav-toggle').removeClass('active');
          }

          event.preventDefault();
          return false;
        });


      };

      // Reflect scrolling in navigation
      var navActive = function (section) {

        var $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
          $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });

      };

      var navigationSection = function () {

        var $section = $('section[data-section]');

        $section.waypoint(function (direction) {

          if (direction === 'down') {
            navActive($(this.element).data('section'));
          }
        }, {
            offset: '150px'
          });

        $section.waypoint(function (direction) {
          if (direction === 'up') {
            navActive($(this.element).data('section'));
          }
        }, {
            offset: function () { return -$(this.element).height() + 155; }
          });

      };






      var sliderMain = function () {
/*
        $('#colorlib-hero .flexslider').flexslider({
          animation: "fade",
          slideshowSpeed: 5000,
          directionNav: true,
          start: function () {
            setTimeout(function () {
              $('.slider-text').removeClass('animated fadeInUp');
              $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
            }, 500);
          },
          before: function () {
            setTimeout(function () {
              $('.slider-text').removeClass('animated fadeInUp');
              $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
            }, 500);
          }

        });
*/
      };

      var stickyFunction = function () {

        var h = $('.image-content').outerHeight();

        if ($(window).width() <= 992) {
          $("#sticky_item").trigger("sticky_kit:detach");
        } else {
          $('.sticky-parent').removeClass('stick-detach');
          $("#sticky_item").trigger("sticky_kit:detach");
          $("#sticky_item").trigger("sticky_kit:unstick");
        }

        $(window).resize(function () {
          var h = $('.image-content').outerHeight();
          $('.sticky-parent').css('height', h);


          if ($(window).width() <= 992) {
            $("#sticky_item").trigger("sticky_kit:detach");
          } else {
            $('.sticky-parent').removeClass('stick-detach');
            $("#sticky_item").trigger("sticky_kit:detach");
            $("#sticky_item").trigger("sticky_kit:unstick");

            $("#sticky_item").stick_in_parent();
          }




        });

        $('.sticky-parent').css('height', h);

        // $("#sticky_item").stick_in_parent();

      };

  /*    var owlCrouselFeatureSlide = function () {
        $('.owl-carousel').owlCarousel({
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          autoplay: true,
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          autoHeight: true,
          items: 1,
          navText: [
            "<i class='icon-arrow-left3 owl-direction'></i>",
            "<i class='icon-arrow-right3 owl-direction'></i>"
          ]
        })
      };
*/
      // Document on load.
      $(function () {
        fullHeight();
        counter();
        counterWayPoint();
        contentWayPoint();
        burgerMenu();

        clickMenu();
        // navActive();
        navigationSection();
        // windowScroll();


        mobileMenuOutsideClick();
        sliderMain();
        stickyFunction();
        // owlCrouselFeatureSlide();
      });


    }());

  }
  getContrats() {
    this.contratService.getContrats().subscribe(contrats => this.contrats = contrats);
  }
  /*
  submitOffer(){
    console.log('CONTENT IS ::::: ');
    console.log(this.editorContent);
  }
  */
  submitOffer() {
    console.log('new Offre... ');
    console.log(this.offre);
    this.offreService.addOffre(this.offre).subscribe(
      response => {
        console.log('Offre: ' + this.offre.titre + ' is registred');
        this.offres.push(this.offre);
      },
      error => console.log('error: ' + error)
    );
    $('#offer').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }

  getSecteurs(): void {
    this.secteurService.getSecteurs().subscribe(secteurs => this.secteurs = secteurs);
  }

  getOffres(): void {
    this.offreService.getOffres().subscribe(offres => this.offres = offres);
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

  contratOnChange(value) {
    // this.candidate.metier.metier.metier = value;
    this.offre.contrat.contrat = value;
  }

  metierOnChange(value) {
    // this.candidate.metier.metier.metier = value;
    this.offre.metier.metier = value;
  }

  public options: Object = {
    placeholderText: "Ajouter une description",
    charCounterCount: true,
    quickInsertTags: [''],
    toolbarButtons: ['bold', 'italic', 'formatUL', 'undo', 'redo'],
    // toolbarButtonsXS: ['bold', 'italic', 'paragraphFormat', 'formatUL'],
    // toolbarButtonsSM: ['bold', 'italic', 'paragraphFormat', 'formatUL'],
    // toolbarButtonsMD: ['bold', 'italic', 'paragraphFormat', 'formatUL'],

    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }
  }
}
