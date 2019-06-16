import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  usernameFormControl = new FormControl('', [
    Validators.required
  ])

  passwordFormControl = new FormControl('', [
    Validators.required
  ])

  ngOnInit() {
    this.formValidation();
  }

  formValidation() {
    this.form = this.formBuilder.group({
      usernameFormControl: [null, this.usernameFormControl],
      passwordFormControl: [null, this.passwordFormControl]
    });
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'password02') {
      this.router.navigate(["user"]);
    } else {
      alert("You have entered an invalid username or password");
    }
  }

}
