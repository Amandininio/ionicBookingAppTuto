import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isAuth: boolean;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  this.isAuth = this.authService.getUserStatus();
  }

  onLogin() {
    this.authService.logIn();
    this.isAuth = this.authService.getUserStatus();
    this.router.navigate(['/places']);
  }

  onLogOut() {
    this.authService.logOut();
  }

}
