import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})



export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
     this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }
  
get username() {
  return this.registerForm.get('username');
}

get password() {
  return this.registerForm.get('password');
}

onSubmit() {
  this.authService.registerUser(this.username.value, this.password.value);
}
}
