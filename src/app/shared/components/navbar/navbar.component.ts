import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  time = Date.now();
  timeHandlerInterval!: number;
  constructor(
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.timeHandlerInterval = setInterval(() => {
      this.time = Date.now();
    }, 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.timeHandlerInterval);
  }

  logout(): void {
    this.auth.logout();
  }

}
