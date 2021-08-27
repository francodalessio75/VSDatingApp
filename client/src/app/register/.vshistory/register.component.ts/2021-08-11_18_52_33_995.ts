import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  model: any = { 'username': '', 'password': '' }


  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  register() {
    this.model.username = this.registerForm.value.username;
    this.model.password = this.registerForm.value.password;
    console.log(this.model);
  }

  cancel() {
  }

}
