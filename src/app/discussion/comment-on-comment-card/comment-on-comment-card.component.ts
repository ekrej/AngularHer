import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../models/comment.model';
import { AuthService } from 'src/services/auth.service';
import { CommentService } from 'src/services/comment.service';
@Component({
  selector: 'app-comment-on-comment-card',
  templateUrl: './comment-on-comment-card.component.html',
  styleUrls: ['./comment-on-comment-card.component.scss']
})
export class CommentOnCommentCardComponent implements OnInit {
  @Input() comment: Comment
  @Input() discussionId: string;
  comments: Comment[];
  upvotes: number;
  downvotes: number;
  edit: boolean;
  @Input() depth: number
  constructor(private authService: AuthService, private commentService: CommentService) { }

  ngOnInit() {
    this.depth += 1;
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
