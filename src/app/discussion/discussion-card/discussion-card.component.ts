import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from 'src/models/discussion.model';


@Component({
  selector: 'app-discussion-card',
  templateUrl: './discussion-card.component.html',
  styleUrls: ['./discussion-card.component.scss']
})
export class DiscussionCardComponent implements OnInit {
  @Input() discussion: Discussion;
  date: String
  upvotes: number;
  downvotes: number;
  
  constructor() { }

  ngOnInit() {
    this.date = new Date(this.discussion.startDate).toLocaleDateString();
    if(this.discussion.upvotesArray){
      this.upvotes = this.discussion.upvotesArray.length
    }else {
      this.upvotes = 0;
    }
    if(this.discussion.downvotesArray){
      this.downvotes = this.discussion.downvotesArray.length
    }else {
      this.downvotes = 0;
    }
  }

}
