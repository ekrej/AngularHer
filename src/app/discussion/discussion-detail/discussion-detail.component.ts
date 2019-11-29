import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscussionService } from 'src/services/discussion.service';
import { filter, tap } from 'rxjs/operators';
import { Discussion } from 'src/models/discussion.model';
import { Comment } from '../../../models/comment.model'

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.scss']
})
export class DiscussionDetailComponent implements OnInit {
 
  constructor(private route: ActivatedRoute, private discussionService: DiscussionService) { }
  id: string;
  discussion: Discussion;
  comments: Comment[];
  date: String;
  upvotes: number;
  downvotes: number;

  ngOnInit() {

    this.route.params.pipe(
      filter(params => params['id']),
      filter(params => !!params),
      tap(param => this.id = param.id))
        .subscribe(
          res => this.getDiscussionInfo()
        )
        
  }

  getDiscussionInfo(){
    this.discussionService.getDiscussionbyId(this.id)
    .subscribe(
      discussion => {
        console.log(discussion)
        this.discussion = discussion;
        this.date = new Date(discussion.startDate).toLocaleDateString();
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
        this.getComments();
      }
    )
  }

  getComments(){
    if(this.discussion.comments){
      this.comments = this.discussion.comments
    }
  }

}
