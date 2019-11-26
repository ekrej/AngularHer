import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    signinUser(username: String, password: String) {
        this.logout();
        
        this.http.post<any>(`https://angularherapi.herokuapp.com/api/user/login`, {
            username,
            password
        }, {headers:  this.httpHeaders})
            .subscribe((response) => {
                localStorage.setItem("token", response.token);
                this.router.navigate(['/']);
            });
    }


    registerUser(username: String, password: String) {
        this.logout();
        this.http.post<any>(`https://angularherapi.herokuapp.com/api/user`, {
            username,
            password
        })
            .subscribe((response) => {
                this.signinUser(response.username, response.password)
            });
    }

    logout() {
        localStorage.clear();
    }
    
    isAuthenticated() {
        return localStorage.getItem('token') != null;
    }
    
    getToken(): String {
        return localStorage.getItem('token');
    }
}