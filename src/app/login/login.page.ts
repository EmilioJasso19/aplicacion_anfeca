import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    email: '',
    password: ''
  };

  constructor() {}

  onLogin(form: NgForm) {
    if (form.valid) {
      console.log('Login successful', this.user);
      // Aquí iría la lógica de autenticación
    }
  }
}
