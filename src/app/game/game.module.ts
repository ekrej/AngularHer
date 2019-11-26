import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameService } from '../../services/game.service';
import { AddGameComponent } from "./add-game/add-game.component";
import { GameDetailComponent } from "./game-detail/game-detail.component";
import { GameListComponent } from './game-list/game-list.component';
import { GameRoutingModule } from "./game-routing.module";

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
