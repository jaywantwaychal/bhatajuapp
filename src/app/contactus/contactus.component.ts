import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormBuilder, Validator, Validators, FormGroup } from '@angular/forms';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit, OnDestroy {

  @Input() deviceXs: boolean;
  contactUsForm: FormGroup;
  mediaSub: Subscription;

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    document.body.style.background = '#ffebeb';
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    })

  }
  ngOnDestroy(): void {
    document.body.style.background = '';
  }
}
