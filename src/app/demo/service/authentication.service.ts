import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../api/user";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router:Router) {
  }
  user: any = [{
    email: '',
    password:''
  }];
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || ('false'));

  setLoginStatus(value: any) {
    this.loggedInStatus = value.toString();
    localStorage.setItem('loggedIn', this.loggedInStatus);
    if(!value){
      this.router.navigate(['login']);
    }
    
  }

  get LoginStatus() {
    return JSON.parse(localStorage.getItem('loggedIn') || 
    this.loggedInStatus.toString());
  }

  logInUser(email: string, password: string){  
    return true;  
    // if(email.toLowerCase() == 'kiran.panchal@radixweb.com' && password.toLocaleLowerCase() == '123'){
    //   this.user.email = email;
    //   this.user.password = password;
    //   return true;
    // }
    // return false;
  }
}
