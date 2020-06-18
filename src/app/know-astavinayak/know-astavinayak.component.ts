import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-astavinayak',
  templateUrl: './know-astavinayak.component.html',
  styleUrls: ['./know-astavinayak.component.css']
})
export class KnowAstavinayakComponent implements OnInit {

  headingMessage: string ='Ashta-vinayak';
  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    { src: "assets/images/1.jpg" },
    { src: "assets/images/2.jpg" },
    { src: "assets/images/3.jpg" },
    { src: "assets/images/4.jpg" },
    { src: "assets/images/5.jpg" },
    { src: "assets/images/6.jpg" },
    { src: "assets/images/7.jpg" },
    { src: "assets/images/8.jpg" }
    
  ];
}
