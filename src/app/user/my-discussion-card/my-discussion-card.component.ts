import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from 'src/models/discussion.model';
import { DiscussionService } from 'src/services/discussion.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-my-discussion-card',
  templateUrl: './my-discussion-card.component.html',
  styleUrls: ['./my-discussion-card.component.scss']
})
export class MyDiscussionCardComponent implements OnInit {
  @Input() discussion: Discussion;
  date: String
  constructor(private discussionService: DiscussionService, private authService: AuthService) { }

  ngOnInit() {
    this.date = new Date(this.discussion.startDate).toLocaleDateString();

  }

  upvote(){
    this.discussionService.upvote(this.discussion._id, this.authService.getUser())
  }

  downvote(){
    this.discussionService.downvote(this.discussion._id, this.authService.getUser())
  }


}