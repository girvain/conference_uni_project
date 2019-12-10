import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

import { MatSliderModule } from '@angular/material/slider';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { TalkSearchComponent } from './talk-search/talk-search.component';
import { DisplayTalksComponent } from './display-talks/display-talks.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { LoginComponent } from './login/login.component';
import {CookieModule} from 'ngx-cookie';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { HeadingContentComponent } from './heading-content/heading-content.component';
import { MyTalksComponent } from './my-talks/my-talks.component';
import { LoginContainerComponent } from './login-container/login-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TalkSearchComponent,
    DisplayTalksComponent,
    RatingFormComponent,
    LoginComponent,
    AverageRatingComponent,
    HeadingContentComponent,
    MyTalksComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
    HttpClientModule,
      AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
