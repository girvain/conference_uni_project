import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatToolbar} from '@angular/material';

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

  constructor(private breakpointObserver: BreakpointObserver) {}

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

}

