import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService{
    
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    addCommentOnDiscussion(username: string, content: string, discussion: string){

        this.http.post<any>(`https://angularherapi.herokuapp.com/api/comment`, {
            username,
            content,
            discussion
        })
    }

    addCommentOnComment(username: string, content: string, id: string){

        this.http.post<any>(`https://angularherapi.herokuapp.com/api/comment/${id}`, {
            username,
            content
        })
    }

    getComments(){

    }

    getCommentofComment(){

    }

}