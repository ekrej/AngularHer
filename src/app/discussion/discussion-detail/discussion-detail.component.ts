import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscussionService } from 'src/services/discussion.service';
import { filter, tap } from 'rxjs/operators';
import { Discussion } from 'src/models/discussion.model';
import { Comment } from '../../../models/comment.model'
import { AuthService } from 'src/services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.scss']
})
export class DiscussionDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private discussionService: DiscussionService, private authService: AuthService, private dialog: MatDialog, private _snackBar: MatSnackBar) { }
  id: string;
  discussion: Discussion;
  comments: Comment[];
  date: String;
  user: string;
  isUser: Boolean
  upvotes: number;
  downvotes: number;

  ngOnInit() {
    this.user = this.authService.getUser();
    this.route.params.pipe(
      filter(params => params['id']),
      filter(params => !!params),
      tap(param => this.id = param.id))
      .subscribe(
        res => this.getDiscussionInfo()
      )

  }

  getDiscussionInfo() {
    this.discussionService.getDiscussionbyId(this.id)
      .subscribe(
        discussion => {
          console.log(discussion)
          this.discussion = discussion;
          this.date = new Date(discussion.startDate).toLocaleDateString();
          this.downvotes = discussion.downvotes;
          this.upvotes = discussion.upvotes;
          this.getComments();
        }
      )
  }

  getComments() {
    if (this.discussion.comments) {
      this.comments = this.discussion.comments
    }
    this.setUser()
  }

  setUser() {
    if (this.user == this.discussion.user) {
      this.isUser = true;
    }
  }

  upvote(){
    this.discussionService.upvote(this.id, this.user)
  }

  downvote(){
    this.discussionService.downvote(this.id, this.user)
    this.discussion.downvotes =  this.downvotes + 1;
  }

  deleteWarning(ref: TemplateRef<any>){
    this.dialog.open(ref);
  }

  deleteForReal(){
    this.discussionService.deleteDiscussion(this.id);
    this.dialog.closeAll();
    this._snackBar.open("discussion is deleted",null,{
      duration: 5000,
      panelClass: ['delete-snackbar']
    });
  }

  cancel(){
    this.dialog.closeAll();
  }

}
