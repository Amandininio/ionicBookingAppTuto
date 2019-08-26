import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable(
    {providedIn: 'root'}
)
export class AuthService {
 private _userIsAuth = false;
    constructor( private router: Router) {
    }
    getUserStatus() {
        return this._userIsAuth;
    }

    logIn() {
        this._userIsAuth = true;
    }

    logOut() {
        this._userIsAuth = false;
        this.router.navigate(['/auth']);
    }
}
