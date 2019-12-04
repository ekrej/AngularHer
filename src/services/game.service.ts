import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Game } from 'src/models/game.model';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class GameService{

    constructor(
        private http: HttpClient,
        private router: Router,
        private _snackBar: MatSnackBar
    ) { }

    addGame(name: String, releaseDate: Date, categorie: [String], developer: String){
        this.http.post<any>(`https://angularherapi.herokuapp.com/api/game`, {
            name,
            releaseDate,
            categorie,
            developer
        })
        .subscribe((response) => {
            this._snackBar.open("Game has been added",null,{
                duration: 5000,
                panelClass: ['delete-snackbar']
              });
            this.router.navigate(['/game']);
        });
    }

    getGames(){
        return this.http.get<Game[]>('https://angularherapi.herokuapp.com/api/game')
    }

    getSingleGame(id: string){
        return this.http.get<Game>(`https://angularherapi.herokuapp.com/api/game/${id}`)
    }
}
