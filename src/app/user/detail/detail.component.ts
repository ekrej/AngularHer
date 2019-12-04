import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { Discussion } from 'src/models/discussion.model';
import { DiscussionService } from 'src/services/discussion.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  user: string;
  myDiscussions: Discussion[];
  constructor(private route: ActivatedRoute, private discussionService: DiscussionService) { }
  searchText;
  ngOnInit() {
    this.route.params.pipe(
      filter(params => params['user']),
      filter(params => !!params),
      tap(param => this.user = param.user))
        .subscribe(
          res => this.getUserInfo()
        )
  }

  getUserInfo(){
    this.discussionService.getDiscussionsOfUser(this.user)
    .subscribe((discussions) => {
      this.myDiscussions = discussions;
      console.log(discussions)
    })
  }

}
