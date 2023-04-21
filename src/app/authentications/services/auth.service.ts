import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { login, signUp } from 'src/app/data';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isuserLoggedIn = new BehaviorSubject<boolean>(false);
  isLogginFailed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient, private _router: Router, private toastr: ToastrService) { }


  userSignUp(data: signUp) {
    if (!data.userName || !data.emailAddress || !data.password) {
      this.toastr.error('Please fill all the required fields')
      return
    }
    try{
     this._http.post<any>('http://10.8.10.59:4000/users/',data,{ headers: { "Content-Type": "application/json" } }).subscribe(response=>{
     localStorage.setItem('user', JSON.stringify(response.token));
     this.toastr.success('User sign-up succesfully')
     this.isuserLoggedIn.next(true);
     this._router.navigate(['/admin']);
     })
    }catch(error){
      console.log( 'Signup failed', error);
    }

  }

  userLogin(data: login) {
    if (!data.emailAddress || !data.password) {
      this.toastr.error('Please fill all the required fields')
      return
    }
    try{
      this._http.post<any>('http://10.8.10.59:4000/users/login', data).subscribe(response => {
        const user = response
        if (user) {
          localStorage.setItem('user', JSON.stringify(response));
          this.toastr.success('User logged in succesfully')
          this.isuserLoggedIn.next(true);
          this.isLogginFailed.next(false);
          this._router.navigate(['./admin'])
        } else {
          this.isuserLoggedIn.next(false);
        }
      })
    }catch(error){
      console.log(error);
    }
   

  }

  reloadSeller() {
    if (localStorage.getItem('user')) {
      this.isuserLoggedIn.next(true);
      this._router.navigate(['./admin'])
    }
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

}
