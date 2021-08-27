import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  model: any = { 'username': '', 'password': '' }

  @Output() cancelRegister = new EventEmitter <boolean>();

  constructor(private accountSerice: AccountService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  register() {
    this.model.username = this.registerForm.value.username;
    this.model.password = this.registerForm.value.password;
    this.accountSerice.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => { console.log(error) });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
