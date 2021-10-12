import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  nusDate: Date;
  time: string;

  constructor(private viewportScroller: ViewportScroller) {
    this.nusDate = new Date('August, 2019');
    this.time="";
  }

  ngOnInit(): void {
  }

  scrollIntoView(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView({behavior: "smooth"});
  }

  handleDownloadResume() {
    window.open("https://firebasestorage.googleapis.com/v0/b/anthony-portfolio-d41e3.appspot.com/o/Resume_Anthony%20Xavier%20Poh%20TIanci.pdf?alt=media&token=bc3676bf-71e1-4d40-89aa-a307cad84943", "_blank");
  }

  handleKollabpalTestimonial() {
    window.open("https://firebasestorage.googleapis.com/v0/b/anthony-portfolio-d41e3.appspot.com/o/Kollabpal%20testimonial_Anthony%20Xavier%20Poh%20Tianci.pdf?alt=media&token=b7eb7553-816d-4a93-b395-2337e68a2e26", "_blank");
  }

  handleHackAndRoll() {
    window.open("https://github.com/ccwhgetgit/hacknroll2021", "_blank");
  }

  handlePMFrontend() {
    window.open("https://github.com/anthonyxavier64/PerfectMatchAngular", "_blank");
  }

  handlePMBackend() {
    window.open("https://github.com/anthonyxavier64/perfectMatch", "_blank");
  }

  handlePerFit() {
    window.open("https://github.com/kkangs0226/PerFit", "_blank");
  }

  handleMerlionAirlines() {
    window.open("https://github.com/anthonyxavier64/MerlionAirlines", "_blank");
  }

  handleNESinsta() {
    window.open("https://www.instagram.com/nusentresoc/?hl=en", "_blank");
  }

  handleNESfb() {
    window.open("https://www.facebook.com/nusentresoc/", "_blank");
  }

  handleComClubinsta() {
    window.open("https://www.instagram.com/nuscomputingclub/?hl=en", "_blank");
  }

  handleComClubfb() {
    window.open("https://www.facebook.com/nuscomputing/", "_blank");
  }
}
