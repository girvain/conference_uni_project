import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    @Input() activeRoute: string;
    isDashActive: string;
    isMyTalksActive: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver,
                public authService: AuthService,
                private router: Router
               ) {}

    ngOnInit() {
        this.setRouteSelect();
        console.log('dash route selected');
    }

    setRouteSelect(): void {
        if (this.activeRoute === 'dash') {
            this.isDashActive = 'active';
        } else if (this.activeRoute === 'myTalks') {
            this.isMyTalksActive = 'active';
        }
    }

    logout(): void {
        this.authService.logout().subscribe(() => {
            console.log('logout');
            this.router.navigate(['/login']);

            // //if (this.authService.isLoggedIn) {
            //     // Get the redirect URL from our auth service
            //     // If no redirect has been set, use the default
            //     let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/login';

            //     // Redirect the user
            //     this.router.navigateByUrl(redirect);
            // //}
        });
    }



}

