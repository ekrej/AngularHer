import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscussionService } from 'src/services/discussion.service';
import { filter, tap } from 'rxjs/operators';
import { Discussion } from 'src/models/discussion.model';
import { Comment } from '../../../models/comment.model'
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.scss']
})
export class DiscussionDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private discussionService: DiscussionService, private authService: AuthService) { }
  id: string;
  discussion: Discussion;
  comments: Comment[];
  date: String;
  user: string;
  isUser: Boolean
  upvoted: boolean;
  downvoted: boolean;

  ngOnInit() {
    this.upvoted = false;
    this.downvoted = false;
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
  }

}
