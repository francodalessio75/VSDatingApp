import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginForm: any;
  currentUser$!: Observable<User|null>;
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
    this.currentUser$ = this.accountService.currentUser$;
  }

 

  login() {
    this.model.username = this.loginForm.value.username;
    this.model.password = this.loginForm.value.password;
   
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    },error => {
      console.log(error);
      });
  }

  logout() {
    this.accountService.logout();
  }

}
