import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.background = '#ffebeb';
  }

  
public slides = [
  { src: "assets/images/IMG_0157.JPG" },
  { src: "assets/images/IMG_0162.JPG" },
  { src: "assets/images/IMG_0166.JPG" },
  { src: "assets/images/IMG_0157.JPG" },
  { src: "assets/images/IMG_0162.JPG" },
  { src: "assets/images/IMG_0166.JPG" },
  { src: "assets/images/IMG_0167.JPG" }
];

}
