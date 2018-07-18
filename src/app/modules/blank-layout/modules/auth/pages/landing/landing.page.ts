import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password: ['', Validators.required],
      rememberMe : ['']
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3), Validators.maxLength(50)])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3), Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/), Validators.minLength(6), Validators.maxLength(100)])],
      age: ['', Validators.compose([Validators.required, Validators.pattern(/^([1-9]\d*|0)$/), this.validateAge])],
      gender: ['', Validators.compose([Validators.required])],
      accountType: ['', Validators.compose([Validators.required])],
      acceptTerms: ['', Validators.compose([Validators.required])]
    });
  }

  validateAge(control: FormControl) {
    let age = control.value;
    if(!isNaN(age)) {
      let ageNum = parseInt(age);
      if(ageNum < 13 || ageNum > 110){
        return {
          ageLimit: {
            ageError: true
          }
        }
      }
      else {
        return null;
      }
    } 
    else {
      return null
    }
  }

  private validateForm(form){
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/home']);
      });
  }

  tryLogin(value) {
    if(this.loginForm.valid){
      this.authService.doLogin(value)
        .then(res => {
          this.router.navigate(['/home']);
        }, err => {
          console.log(err);
        });
    }
    else {
      this.validateForm(this.loginForm);
    }
  }

  tryRegister(value) {
    console.log(value);
    if(this.registerForm.valid){
      this.authService.doRegister(value)
        .then(res => {
          this.router.navigate(['/home']);
        }, err => {
          console.log(err);
        });
    }
    else {
      this.validateForm(this.registerForm);
    }
  }

}
