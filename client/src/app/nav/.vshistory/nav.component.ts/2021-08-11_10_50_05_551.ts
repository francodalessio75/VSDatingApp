import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginForm: any;
  isLoading = false;

  model: any = { 'username': '', 'password': '' };
  formControlUsername: string = '';
  formControlPassword: string = '';



  constructor() { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', {validators: [Validators.required]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

 

  login() {
    this.model.username = this.loginForm.value.username;
    this.model.password = this.loginForm.value.password;
  }

}
