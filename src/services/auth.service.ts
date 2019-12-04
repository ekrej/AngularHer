import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
    httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    constructor(
        private http: HttpClient,
        private router: Router,
        private _snackBar: MatSnackBar
    ) { }

    signinUser(username: string, password: string) {
        this.logout();
        
        this.http.post<any>(`https://angularherapi.herokuapp.com/api/user/login`, {
            username,
            password
        }, {headers:  this.httpHeaders})
            .subscribe((response) => {
                localStorage.setItem("user", username)
                localStorage.setItem("token", response.token);
                this._snackBar.open("successfully logged in",null,{
                    duration: 5000,
                    panelClass: ['delete-snackbar']
                  });
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
                this._snackBar.open("user has been registered",null,{
                    duration: 5000,
                    panelClass: ['delete-snackbar']
                  });
                this.signinUser(response.username, response.password)
            });
    }

    logout() {
        this._snackBar.open("successfully logged out",null,{
            duration: 5000,
            panelClass: ['delete-snackbar']
          });
        localStorage.clear();
    }
    
    isAuthenticated() {
        return localStorage.getItem('token') != null;
    }
    
    getToken(): String {
        return localStorage.getItem('token');
    }

    getUser(): string {
        return localStorage.getItem('user');
    }

    updateUser(currentPassword, newPassword){
        let username = this.getUser();
        let header = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Access-Token' : localStorage.getItem('token')
          })
        console.log(username)
        this.http.put<any>(`https://angularherapi.herokuapp.com/api/user`, {
            username, 
            currentPassword,
            newPassword
        }, {headers: header})
        .subscribe((response) => {
            this._snackBar.open("password is changed",null,{
                duration: 5000,
                panelClass: ['delete-snackbar']
              });
              this.router.navigate(['/']);
        });
    }
}