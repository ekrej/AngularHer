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
import { GameModule } from "./game/game.module";
import { DiscussionModule } from "./discussion/discussion.module";

@NgModule({
  declarations: [AppComponent, NavbarComponent, UsecasesComponent, UsecaseComponent, DashboardComponent],
  imports: [BrowserModule, RouterModule, NgbModule, AppRoutingModule, DiscussionModule, GameModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

