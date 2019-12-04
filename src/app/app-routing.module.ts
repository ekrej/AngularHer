import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsecasesComponent } from './about/usecases/usecases.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { GameModule } from './game/game.module';
import { DiscussionModule } from './discussion/discussion.module'
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from "./register/register.component";
import { EditComponent } from './user/edit/edit.component';
import { DetailComponent } from './user/detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'discussion', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: UsecasesComponent },
  { path: 'discussion', loadChildren:() => DiscussionModule },
  { path: 'game', loadChildren:() => GameModule },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'user/edit', component: EditComponent},
  { path: 'user/:user', component: DetailComponent},
  { path: '**', redirectTo: 'discussion' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
