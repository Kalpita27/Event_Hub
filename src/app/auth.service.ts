import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'  //fpr connect with server
import { Router } from '@angular/router' //for routing

@Injectable()
export class AuthService 
{

  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
