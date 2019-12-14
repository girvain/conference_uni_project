import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { TalksService } from '../talks.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false; // set this to true to be always logged in when in dev mode

  // store the URL so we can redirect after logging in
  redirectUrl: string;

    constructor(private talksService: TalksService) {}

    login(credentials: any): Observable<boolean> {
    // return of(true).pipe(
    //   delay(1000),
    //   tap(val => this.isLoggedIn = true)
    // );
      return this.talksService.login(credentials).pipe(
          tap(val => this.isLoggedIn = true)
      );
  }


    logout(): Observable<boolean> {
      return this.talksService.logout().pipe(
          tap(val => this.isLoggedIn = false)
      );
    //this.isLoggedIn = false;
  }
}
