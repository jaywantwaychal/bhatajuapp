import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.css']
})
export class ContactcardComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.contactUsForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['']
      }),
      email: ['', Validators.email],
      phone: ['', [Validators.pattern('^[0-9]*$'), Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      message: ['', Validators.maxLength(256)]
    });
  }
  onSubmit() {
    console.log(this.contactUsForm.value);
  }

}
