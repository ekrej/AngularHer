import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { Discussion } from 'src/models/discussion.model';

@Injectable()
export class DiscussionService{


    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    addDiscussion(){

    }

    getDiscussions(){

    }

    getDiscussionsOfGame(id: string){
       return this.http.get<Discussion[]>(`https://angularherapi.herokuapp.com/api/discussion/game/${id}`)
    }
}