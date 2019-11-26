import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class GameService{

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    addGame(name: String, releaseDate: Date, categorie: [String], developer: String){
        this.http.post<any>(`https://angularherapi.herokuapp.com/api/game`, {
            name,
            releaseDate,
            categorie,
            developer
        })
        .subscribe((response) => {
            this.router.navigate(['/']);
        });
    }
}
