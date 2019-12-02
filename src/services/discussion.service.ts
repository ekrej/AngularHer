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

    addDiscussion(name: string, content: string, gameId: string, username: string){
        return this.http.post<any>(`https://angularherapi.herokuapp.com/api/discussion`, {
            name, 
            content, 
            gameId, 
            username,
        })        
        .subscribe((response) => {
            this.router.navigate(['/discussion']);
        });
    }

    updateDiscussion(name: string, content: string, gameId: string, id:string){
        return this.http.put<any>(`https://angularherapi.herokuapp.com/api/discussion/${id}`, {
            name,
            content,
            gameId,
        })
        .subscribe((response) => {
            this.router.navigate([`/discussion/${id}`]);
        });
    }

    getDiscussions(){
        return this.http.get<Discussion[]>(`https://angularherapi.herokuapp.com/api/discussion`)
    }

    getDiscussionsOfGame(id: string){
       return this.http.get<Discussion[]>(`https://angularherapi.herokuapp.com/api/discussion/game/${id}`)
    }

    getDiscussionbyId(id: string){
        return this.http.get<Discussion>(`https://angularherapi.herokuapp.com/api/discussion/${id}`)
    }

    upvote(id:string, username: string){
        this.http.post<any>(`https://angularherapi.herokuapp.com/api/discussion/${id}/upvote`, {
            username
        }).subscribe((response) => {
            console.log(response)
            this.router.navigateByUrl('/discussion', { skipLocationChange: true }).then(() => {
                this.router.navigate([`/discussion/${id}`]);
            });
        });
    }

    downvote(id:string, username: string){
        this.http.post<any>(`https://angularherapi.herokuapp.com/api/discussion/${id}/downvote`, {
            username
        }).subscribe((response) => {
            this.router.navigate([`/discussion/${id}`]);
        });
    }
}