import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../models/comment.model';
@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {
  @Input() comment: Comment
  upvotes: number;
  downvotes: number;
  constructor() { }

  ngOnInit() {
    console.log(this.comment._id)
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

  }

}
