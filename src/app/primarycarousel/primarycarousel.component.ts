import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-primarycarousel',
  templateUrl: './primarycarousel.component.html',
  styleUrls: ['./primarycarousel.component.css']
})
export class PrimarycarouselComponent implements OnInit {
  @Input() slides;
  
  currentSlide = 0;

  ngOnInit(): void {
  }
  
  constructor() {}

  someAction() {
    console.log("clicked");
  }
}
