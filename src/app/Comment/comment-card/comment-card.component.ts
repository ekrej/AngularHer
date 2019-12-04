import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Comment } from '../../../models/comment.model';
import { AuthService } from 'src/services/auth.service';
import { CommentService } from 'src/services/comment.service';
import { MatDialog, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {
  @Input() comment: Comment
  @Input() discussionId: string;
  comments: Comment[];
  upvotes: number;
  downvotes: number;
  depth: number;
  edit: boolean;
  isUser: Boolean;
  user: string;
  constructor(private authService: AuthService, private commentService: CommentService,  private dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.edit = false;
    this.depth = 0;
    if(this.comment.upvotesArray){
      this.upvotes = this.comment.upvotesArray.length
    }else {
      this.upvotes = 0;
    }
    if(this.comment.downvotesArray){
      this.downvotes = this.comment.downvotesArray.length
    }else {
      this.downvotes = 0;
    }
    this.getComments();
  }

  getComments(){
    if(this.comment.comments){
      this.comments = this.comment.comments
    }
    this.setUser()
  }

  setEdit(){
    this.edit = !this.edit
  }

  upvote(){
    this.commentService.upvote(this.comment._id, this.authService.getUser(), this.discussionId)
  }

  downvote(){
    this.commentService.downvote(this.comment._id, this.authService.getUser(), this.discussionId)
  }

  deleteWarning(ref: TemplateRef<any>){
    this.dialog.open(ref);
  }

  deleteForReal(){
    this.commentService.deleteComment(this.comment._id, this.discussionId);
    this.dialog.closeAll();

  }

  cancel(){
    this.dialog.closeAll();
  }

  setUser() {
    if (this.user == this.comment.user) {
      this.isUser = true;
    }
  }

}
