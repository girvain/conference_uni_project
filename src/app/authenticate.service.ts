import { Injectable } from '@angular/core';
//import { CookieService } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

    constructor(){}
    //constructor(private cookieService: CookieService ) {}

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   request = request.clone({
  //     withCredentials: true,
  //   });
  //   return next.handle(request);
  // }
}
