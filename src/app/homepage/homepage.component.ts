import { Component, OnInit, Input } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  deviceXs: boolean;
  mediaSub: Subscription;
  headingMessage: string ='A PLATFORM TO BLESS ALL YOUR PUJAS & SPIRITUAL NEEDS';
  headingSubMessage: string = "Below is the list of Purohit's in area.";

  constructor(public mediaObserver: MediaObserver) {

  }
  ngOnInit(): void {
    document.body.style.background = '#ffebeb';
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    })
  }


  cards = [
    { src: "assets/images/1.jpg" },
    { src: "assets/images/2.jpg" },
    { src: "assets/images/3.jpg" },
    { src: "assets/images/4.jpg" },
    { src: "assets/images/5.jpg" },
    { src: "assets/images/6.jpg" },
    { src: "assets/images/7.jpg" },
    { src: "assets/images/8.jpg" },
    { src: "assets/images/1.jpg" },
    { src: "assets/images/2.jpg" },
    { src: "assets/images/3.jpg" },
    { src: "assets/images/4.jpg" },
    { src: "assets/images/5.jpg" },
    { src: "assets/images/6.jpg" },
    { src: "assets/images/7.jpg" },
    { src: "assets/images/8.jpg" }
  ];

  public slides1 = [
    { src: "assets/images/1.jpg" },
    { src: "assets/images/2.jpg" },
    { src: "assets/images/3.jpg" },
    { src: "assets/images/4.jpg" },
    { src: "assets/images/5.jpg" },
    { src: "assets/images/6.jpg" },
    { src: "assets/images/7.jpg" },
    { src: "assets/images/8.jpg" }
  ];

  public slides2 = [
    { src: "assets/images/1.jpg" },
    { src: "assets/images/2.jpg" },
    { src: "assets/images/3.jpg" },
    { src: "assets/images/4.jpg" },
    { src: "assets/images/5.jpg" },
    { src: "assets/images/6.jpg" },
    { src: "assets/images/7.jpg" },
    { src: "assets/images/8.jpg" }
  ];

  onAction() {

  }
}
