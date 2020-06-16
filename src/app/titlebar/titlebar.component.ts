import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit, OnDestroy{

  @Input()  deviceXs: boolean;
  mediaSub: Subscription;
 
  
  constructor(public mediaObserver: MediaObserver) {

  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange)=>{
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    })
  }
  ngOnDestroy(): void {
   
  }

}
