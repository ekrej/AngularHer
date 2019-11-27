import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Game } from 'src/models/game.model';

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

    getGames(){
        return this.http.get<Game[]>('https://angularherapi.herokuapp.com/api/game')
    }

    getSingleGame(id: string){
        console.log("getSingleGame");
        return this.http.get<Game>(`https://angularherapi.herokuapp.com/api/game/${id}`)
    }
}
