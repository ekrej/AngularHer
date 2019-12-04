import { Component, OnInit } from '@angular/core';
import { DiscussionService } from "../../../services/discussion.service";
import { Discussion } from 'src/models/discussion.model';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})



export class DiscussionListComponent implements OnInit {
  discussions: Discussion[];
  searchText;
  constructor(private discussionService: DiscussionService) { }

  ngOnInit() {
    this.discussionService.getDiscussions()
      .subscribe(discussions => {
        this.discussions = discussions
      });
  }

}
