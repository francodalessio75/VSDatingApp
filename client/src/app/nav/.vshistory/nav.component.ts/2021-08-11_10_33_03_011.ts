import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginForm: FormGroup;
  isLoading = false;
  private loadingSubs: Subscription;

  model: any = {}
  formControlUsername: string = '';
  formControlPassword: string = '';



  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

 

  login() {
    console.log(this.model);
  }

}
