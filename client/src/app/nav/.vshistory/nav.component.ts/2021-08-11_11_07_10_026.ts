import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { error } from 'console';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginForm: any;
  loggedIn: boolean = false;
  model: any = { 'username': '', 'password': '' };
  formControlUsername: string = '';
  formControlPassword: string = '';



  constructor(private accountService: AccountService) { }


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
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    },error => {
      console.log(error);
      });
  }

}
