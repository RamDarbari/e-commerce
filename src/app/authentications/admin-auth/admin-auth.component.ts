import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { login, signUp } from 'src/app/data';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent implements OnInit {
  constructor(
    private _admin: AuthService,
    private _router: Router,
    private _taostr: ToastrService
  ) { }
  sellerSignUp!: NgForm;
  showLogin = false;
  loginError: any;

  ngOnInit() {
    this._admin.reloadSeller();
  }

  onLogin() {
    this.showLogin = false;
  }

  onSignUp() {
    this.showLogin = true;
  }

  signUp(data: signUp): void {
    this._admin.userSignUp(data);
  }

  login(data: login): void {
    this._admin.userLogin(data);
    if (this._admin.isLogginFailed) {
      this._admin.isLogginFailed.subscribe((isError) => {
        if (isError) {
          this.loginError = this._taostr.error('Email or Password in not Correct')
        }
      });
    }

  }

  hasUpperCase(value: string): boolean {
    return /[A-Z]/.test(value);
  }

  hasSymbol(value: string): boolean {
    return /[!@#$%^&*()_+]/.test(value);
  }

  hasThreeConsecutiveNumbers(value: string): boolean {
    return /[0-9]{3,}/.test(value);
  }

  passwordIsValid(value: string): boolean {
    return (
      this.hasUpperCase(value) &&
      this.hasSymbol(value) &&
      !this.hasThreeConsecutiveNumbers(value) &&
      value.length >= 8
    );
  }
  passwordsDoNotMatch(): boolean {
    const password = this.sellerSignUp?.value?.password;
    const password2 = this.sellerSignUp?.value?.password2;
    return password !== password2;
  }
  



}
