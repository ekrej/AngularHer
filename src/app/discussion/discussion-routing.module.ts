import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DiscussionListComponent } from "./discussion-list/discussion-list.component";
import { DiscussionDetailComponent } from "./discussion-detail/discussion-detail.component";
import { AddDiscussionComponent } from "./add-discussion/add-discussion.component";


const routes: Routes = [
  { path: '', component: DiscussionListComponent},
  { path: '/add', component: AddDiscussionComponent},
  { path: '/detail/:id', component: DiscussionDetailComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }