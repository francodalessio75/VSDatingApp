import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + '/account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
    )
  }

  logout(model: any) {
    localStorage.removeItem('user');
  }

  register(model: any) {
    return this.http.post(this.baseUrl + '/account/register', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this
        }
      })
    )
  }
}
