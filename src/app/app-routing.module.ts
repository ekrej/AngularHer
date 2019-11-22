import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsecasesComponent } from './about/usecases/usecases.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { GameModule } from './game/game.module';
import { DiscussionModule } from './discussion/discussion.module'


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: UsecasesComponent },
  { path: '**', redirectTo: '/' },
  { path: 'discussion', loadChildren:() => DiscussionModule },
  { path: 'game', loadChildren:() => GameModule }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
