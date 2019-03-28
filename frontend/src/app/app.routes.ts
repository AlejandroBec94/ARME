import {Route, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';

export const ROUTES: Routes = [
  {
    path: '',  component: LoginComponent,
  }
  // {path: '**', pathMatch: 'full', redirectTo: 'home'},
];
