import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from 'src/models/discussion.model';
import { AuthService } from 'src/services/auth.service';
import { DiscussionService } from 'src/services/discussion.service';


@Component({
  selector: 'app-discussion-card',
  templateUrl: './discussion-card.component.html',
  styleUrls: ['./discussion-card.component.scss']
})
export class DiscussionCardComponent implements OnInit {
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
