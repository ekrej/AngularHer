import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../models/comment.model';
import { AuthService } from 'src/services/auth.service';
import { CommentService } from 'src/services/comment.service';
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
  constructor(private authService: AuthService, private commentService: CommentService) { }

  ngOnInit() {
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

}
