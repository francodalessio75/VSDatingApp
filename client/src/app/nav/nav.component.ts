import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  model = { 'username': '', 'password': '' };

  constructor(public accountService: AccountService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  onSubmit() {
    this.model.username = this.loginForm.value.username;
    this.model.password = this.loginForm.value.password;
   
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
    },error => {
      console.log(error);
      this.toastr.error(error.error);
      });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
