import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CommentService {

    constructor(
        private http: HttpClient,
        private router: Router,
        private _snackBar: MatSnackBar
    ) { }

    addCommentOnDiscussion(username: string, content: string, discussion: string) {

        this.http.post<any>(`https://angularherapi.herokuapp.com/api/comment`, {
            username,
            content,
            discussion
        })
            .subscribe((response) => {
                this._snackBar.open("Comment has been added",null,{
                    duration: 5000,
                    panelClass: ['delete-snackbar']
                  });
                this.router.navigateByUrl('/discussion', { skipLocationChange: true }).then(() => {
                    this.router.navigate([`/discussion/${discussion}`]);
                });
            })
    }

    addCommentOnComment(username: string, content: string, id: string, discussion: string) {

        this.http.post<any>(`https://angularherapi.herokuapp.com/api/comment/${id}`, {
            username,
            content,
            discussion
        })
            .subscribe((response) => {
                this._snackBar.open("Comment has been added",'okay',{
                    duration: 5000,
                    panelClass: ['delete-snackbar']
                  });
                this.router.navigateByUrl('/discussion', { skipLocationChange: true }).then(() => {
                    this.router.navigate([`/discussion/${discussion}`]);
                });
            })
    }

    updateComment(content: string, id: string, discussion: string){
        this.http.put<any>(`https://angularherapi.herokuapp.com/api/comment/${id}`, {
            content
        }).subscribe((response) => {
            this._snackBar.open("Comment has been edited",'okay',{
                duration: 5000,
                panelClass: ['delete-snackbar']
              });
                this.router.navigateByUrl('/discussion', { skipLocationChange: true }).then(() => {
                    this.router.navigate([`/discussion/${discussion}`]);
                });
            })
    }
    

    upvote(id, username, discussion){
        this.http.post<any>(`https://angularherapi.herokuapp.com/api/comment/${id}/upvote`, {
            username
        }).subscribe((response) => {
            this._snackBar.open("Comment has been upvoted",'okay',{
                duration: 5000,
                panelClass: ['upvote-snackbar']
              });
            this.router.navigateByUrl('/discussion', { skipLocationChange: true }).then(() => {
                this.router.navigate([`/discussion/${discussion}`]);
            });
        })
    }

    downvote(id, username, discussion){
        this.http.post<any>(`https://angularherapi.herokuapp.com/api/comment/${id}/downvote`, {
            username
        }).subscribe((response) => {
            this._snackBar.open("Comment has been downvoted",'okay',{
                duration: 5000,
                panelClass: ['downvote-snackbar']
              });
            this.router.navigateByUrl('/discussion', { skipLocationChange: true }).then(() => {
                this.router.navigate([`/discussion/${discussion}`]);
            });
        });
    }

    deleteComment(id: string, discussion: string){
        this.http.delete<any>(`https://angularherapi.herokuapp.com/api/comment/${id}`, {

        }).subscribe((response) => {
            this._snackBar.open("Comment has been deleted", 'okay',{
                duration: 5000,
                panelClass: ['downvote-snackbar']
              });
            this.router.navigateByUrl('/discussion', { skipLocationChange: true }).then(() => {
                this.router.navigate([`/discussion/${discussion}`]);
            });
        });
    }

}