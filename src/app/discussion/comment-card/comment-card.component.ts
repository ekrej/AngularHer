import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../models/comment.model';
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
  constructor() { }

  ngOnInit() {
    this.edit = false;
    this.depth = 0;
    console.log(this.comment)
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

}
