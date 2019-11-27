import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDiscussionComponent } from './add-discussion/add-discussion.component';
import { DiscussionDetailComponent } from './discussion-detail/discussion-detail.component';
import { DiscussionListComponent } from './discussion-list/discussion-list.component';
import { DiscussionRoutingModule } from "./discussion-routing.module";
import { DiscussionCardComponent } from './discussion-card/discussion-card.component';



@NgModule({
  declarations: [
    AddDiscussionComponent, 
    DiscussionDetailComponent, 
    DiscussionListComponent, DiscussionCardComponent],
  imports: [
    CommonModule,
    DiscussionRoutingModule
  ]
})
export class DiscussionModule { }
