import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDiscussionComponent } from './add-discussion/add-discussion.component';
import { DiscussionDetailComponent } from './discussion-detail/discussion-detail.component';
import { DiscussionListComponent } from './discussion-list/discussion-list.component';



@NgModule({
  declarations: [AddDiscussionComponent, DiscussionDetailComponent, DiscussionListComponent],
  imports: [
    CommonModule
  ]
})
export class DiscussionModule { }
