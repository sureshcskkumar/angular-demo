import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    state: RouterStateSnapshot): boolean {
      // logic to find if user is valid or invalid
      console.log("guards is working");
      /* 
      localStorage.getItem("token");
      var payload = jwt_decode(token);
                        payload -> {
                          "sub": "1234567890",
                          "name": "John Doe",
                          "iat": 1516239022
                        }
      */
      // return true; // allows access to URL
      return false; // blocks access to URL
  }
  
}
