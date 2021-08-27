import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  formControlUsername: string = '';
  formControlPassword: string = '';



  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    
  }

 

  login() {
    console.log(this.model);
  }

}
