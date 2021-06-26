import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IUser } from '../shared/interfaces/user.interface';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.redirectHomeIfAuth();

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  submit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const user: IUser = this.loginForm.value;
    this.auth.login(user);

    this.redirectHomeIfAuth();
  }

  private redirectHomeIfAuth(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/']).catch(err => console.log(err));
    }
  }

}
