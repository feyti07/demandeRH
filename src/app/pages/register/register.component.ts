import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from '../../Models/UserDto';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userDto: UserDto = {username: '', email: '',  password: ''};
  errorMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
  }

  async login() {
    await this.router.navigate(['login']);
  }

  register() {
    this.errorMessages = [];
    this.authService.register({
        body: this.userDto
      }
    ).subscribe({
      next: async (data) => {
        await this.router.navigate(['confirm-register']);
      },
      error: (err) => {
        this.errorMessages = err.error.validationErrors;
      }
    });
  }

}
