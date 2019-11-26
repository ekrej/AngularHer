import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from "./game-detail/game-detail.component";
import { AddGameComponent } from "./add-game/add-game.component";


const routes: Routes = [
  { path: '', component: GameListComponent},
  { path: 'add', component: AddGameComponent},
  { path: 'detail/:id', component: GameDetailComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }

