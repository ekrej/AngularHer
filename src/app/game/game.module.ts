import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameRoutingModule } from "./game-routing.module";
import { GameDetailComponent } from "./game-detail/game-detail.component";
import { AddGameComponent } from "./add-game/add-game.component";
import { GameListComponent } from './game-list/game-list.component';
import { GameService } from '../../services/game.service'
import { AppComponent } from '../core/app/app.component';


@NgModule({
  declarations: [
    AddGameComponent,
    GameDetailComponent,
    GameListComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [GameService],
  bootstrap: []
})
export class GameModule { }
