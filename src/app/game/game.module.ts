import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../../services/game.service';
import { DiscussionService } from '../../services/discussion.service'
import { AddGameComponent } from "./add-game/add-game.component";
import { GameDetailComponent } from "./game-detail/game-detail.component";
import { GameListComponent } from './game-list/game-list.component';
import { GameRoutingModule } from "./game-routing.module";
import { GameCardComponent } from './game-card/game-card.component';
import { DiscussionCardComponent } from './discussion-card/discussion-card.component'

import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AddGameComponent,
    GameDetailComponent,
    GameListComponent,
    GameCardComponent,
    DiscussionCardComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule
  ],
  providers: [GameService, DiscussionService],
  bootstrap: []
})
export class GameModule { }
