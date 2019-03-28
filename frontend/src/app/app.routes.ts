import {Route, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {ProfileComponent} from './Components/profile/profile.component';

export const ROUTES: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'profile', component: ProfileComponent,
  }
  // {path: '**', pathMatch: 'full', redirectTo: 'home'},
];
