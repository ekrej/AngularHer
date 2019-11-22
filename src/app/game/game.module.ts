import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from "./game-routing.module";
import { GameDetailComponent } from "./game-detail/game-detail.component";
import { AddGameComponent } from "./add-game/add-game.component";
import { GameListComponent } from './game-list/game-list.component';



@NgModule({
  declarations: [
    AddGameComponent,
    GameDetailComponent,
    GameListComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
