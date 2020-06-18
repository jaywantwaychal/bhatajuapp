import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource , NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-primarycarousel',
  templateUrl: './primarycarousel.component.html',
  styleUrls: ['./primarycarousel.component.css'],
  providers:[NgbCarouselConfig]
})
export class PrimarycarouselComponent implements OnInit {
  @Input() slides1;
  @Input() deviceXs;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  currentSlide = 0;
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;


  ngOnInit(): void {
  }
  
  constructor(config: NgbCarouselConfig) {}

  someAction() {
    console.log("clicked");
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
