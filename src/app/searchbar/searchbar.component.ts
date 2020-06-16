import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchForm:FormGroup;
  panelOpenState = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      city:[''],
      area:[''],
      puja: ['']
     
    });
  }

  onSearch() {
    console.log(this.searchForm.value);
  }
}
