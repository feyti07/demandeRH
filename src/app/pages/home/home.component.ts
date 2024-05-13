import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../Models/AuthenticationRequest';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '../../../services/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showLoginForm: boolean = true;
  authRequest: AuthenticationRequest = {};
  errorMessages: Array<string> = [];
  _loginForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private _fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this._loginForm = this._fb.group({
      email:[''],
      password:[''],
    })
  }

  login() {
    console.log('start login');
    this.errorMessages = [];
    this.authService.authenticate({
      body: this._loginForm.value,
    }).subscribe({
      next: async (data) => {
        console.log('data',data);
        if (data && data.token) {
          localStorage.setItem('token', data.token);
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(data.token);
          if (decodedToken && decodedToken.authorities && decodedToken.authorities[0] && decodedToken.authorities[0].authority === 'ROLE_ADMIN') {
            await this.router.navigate(['dash']);
          } else {
            await this.router.navigate(['dash']);
          }
        } else {
          console.error("Token is missing in the response data");
        } 
      },
      error: (err) => {
        console.log(err);
        this.errorMessages.push(err.error.errorMessage);
      }
    });
  }
  

  async register() {
   await this.router.navigate(['register']);
  }

}
