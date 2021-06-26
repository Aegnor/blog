import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { IUser } from '../interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private router: Router
  ) {
  }

  login(user: IUser): void {
    const isEmailCorrect = user.email !== 'admin@admin.com';
    localStorage.removeItem('user');

    if (isEmailCorrect || user.password !== 'admin') {
      alert(`There is not such ${isEmailCorrect ? 'email' : 'password'}`);
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']).catch(err => console.log(err));
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

}
