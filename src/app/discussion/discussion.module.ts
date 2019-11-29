import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDiscussionComponent } from './add-discussion/add-discussion.component';
import { DiscussionDetailComponent } from './discussion-detail/discussion-detail.component';
import { DiscussionListComponent } from './discussion-list/discussion-list.component';
import { DiscussionRoutingModule } from "./discussion-routing.module";
import { DiscussionCardComponent } from "./discussion-card/discussion-card.component";

import { MatCardModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

@NgModule({
  declarations: [
    AddDiscussionComponent, 
    DiscussionDetailComponent, 
    DiscussionListComponent,
    DiscussionCardComponent,
    CommentCardComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    DiscussionRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DiscussionModule { }
