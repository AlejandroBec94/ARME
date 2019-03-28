import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  cookieValue = 'UNKNOWN';
  random = "";

  constructor(private formBuilder: FormBuilder, private UserService: UserService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  public onSubmit() {

    this.UserService.authorizeUser(this.registerForm.value.email, this.registerForm.value.password).subscribe((data) => {
        console.log(data);
        // this.random = Math.random().toString(36).substr(2, 5);
        this.cookieService.set("RL_16782_12", data.access_token);
        // this.cookieService.set('honeg', this.random);
      }, (error) => {

        if (error.status === 401) {
          alert('Credenciales invalidas');
        } else {
          console.error('Se ha encontrado el siguiente error, por favor contacte al administrador.');
          console.error(error);
        }

      }
    );

  }

}
