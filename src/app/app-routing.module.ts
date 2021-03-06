import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import {MyTalksComponent} from './my-talks/my-talks.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginContainerComponent },
  { path: 'login/:id', component: LoginContainerComponent },
    { path: 'mytalks',
      component: MyTalksComponent,
      canActivate: [AuthGuard],
    },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
