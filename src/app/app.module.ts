import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './core/app/app.component'
import { UsecasesComponent } from './about/usecases/usecases.component'
import { NavbarComponent } from './core/navbar/navbar.component'
import { UsecaseComponent } from './about/usecases/usecase/usecase.component'
import { RouterModule } from '@angular/router'
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AddGameComponent } from './game/add-game/add-game.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { AddDiscussionComponent } from './game/add-discussion/add-discussion.component';
import { DiscussionDetailComponent } from './game/discussion-detail/discussion-detail.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent, UsecasesComponent, UsecaseComponent, DashboardComponent, AddGameComponent, GameDetailComponent, AddDiscussionComponent, DiscussionDetailComponent],
  imports: [BrowserModule, RouterModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

