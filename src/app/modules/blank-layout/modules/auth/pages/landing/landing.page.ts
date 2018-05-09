import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/home']);
      });
  }

  tryLogin(value) {
    // this.authService.doLogin(value)
    //   .then(res => {
        this.router.navigate(['/home']);
      // }, err => {
      //   console.log(err);
      // });
  }

  tryRegister(value) {
    this.authService.doRegister(value)
      .then(res => {
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
      });
  }
}
