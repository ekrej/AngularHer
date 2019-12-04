import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDiscussionComponent } from './add-discussion/add-discussion.component';
import { DiscussionDetailComponent } from './discussion-detail/discussion-detail.component';
import { DiscussionListComponent } from './discussion-list/discussion-list.component';
import { DiscussionRoutingModule } from "./discussion-routing.module";
import { DiscussionCardComponent } from "./discussion-card/discussion-card.component";

import { MatCardModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentCardComponent } from '../Comment/comment-card/comment-card.component';
import { AddCommentComponent } from '../Comment/add-comment/add-comment.component';
import { CommentService } from 'src/services/comment.service';
import { DiscussionService } from 'src/services/discussion.service';
import { CommentOnCommentCardComponent } from '../Comment/comment-on-comment-card/comment-on-comment-card.component';
import { EditDiscussionComponent } from './edit-discussion/edit-discussion.component';
import { EditCommentComponent } from '../Comment/edit-comment/edit-comment.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AddDiscussionComponent, 
    DiscussionDetailComponent, 
    DiscussionListComponent,
    DiscussionCardComponent,
    CommentCardComponent,
    AddCommentComponent,
    CommentOnCommentCardComponent,
    EditDiscussionComponent,
    EditCommentComponent
  ],
  imports: [
    CommonModule,
    DiscussionRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [CommentService, DiscussionService],
})
export class DiscussionModule { }
