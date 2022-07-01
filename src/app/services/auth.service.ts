import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLoggedIn:boolean=false;

  constructor() {
    let isLoggedIn = Boolean(sessionStorage.getItem('islogin'));
    if(isLoggedIn){
      this.isUserLoggedIn = true;
    }else this.isUserLoggedIn = false
   }

   setLoggedIn(){
    this.isUserLoggedIn = true;
    sessionStorage.setItem('islogin', 'true');
   }

   getLoggedIn(){
    return this.isUserLoggedIn;
   }

   logout(){
    this.isUserLoggedIn = false;
   }



}
