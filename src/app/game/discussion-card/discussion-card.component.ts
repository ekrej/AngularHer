import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from 'src/models/discussion.model';

@Component({
  selector: 'app-game-discussion-card',
  templateUrl: './discussion-card.component.html',
  styleUrls: ['./discussion-card.component.scss']
})
export class DiscussionCardComponent implements OnInit {
  @Input() discussion: Discussion;
  date: String
  
  constructor() { }

  ngOnInit() {
    this.date = new Date(this.discussion.startDate).toLocaleDateString()
    console.log("discussion: " + this.discussion._id)
  }

}
