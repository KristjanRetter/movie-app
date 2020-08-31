import { Component, OnInit } from '@angular/core';
import {AppService, Movie} from './app.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor( private formBuilder: FormBuilder){
 
  }
  searchForm = new FormGroup({
    name: new FormControl(''),

  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.searchForm.value.name);
  }


 
}
