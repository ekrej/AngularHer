import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    addCommentOnDiscussion(username: string, content: string, discussion: string) {

        this.http.post<any>(`https://angularherapi.herokuapp.com/api/comment`, {
            username,
            content,
            discussion
        })
            .subscribe((response) => {
                this.router.navigateByUrl('/discussion', { skipLocationChange: true }).then(() => {
                    this.router.navigate([`/discussion/${discussion}`]);
                });
            })
    }

    addCommentOnComment(username: string, content: string, id: string, discussion) {

        this.http.post<any>(`https://angularherapi.herokuapp.com/api/comment/${id}`, {
            username,
            content,
            discussion
        })
            .subscribe((response) => {
                this.router.navigateByUrl('/discussion', { skipLocationChange: true }).then(() => {
                    this.router.navigate([`/discussion/${discussion}`]);
                });
            })
    }

    getComments() {

    }

    getCommentofComment() {

    }

}