import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game.service';
import { Game } from 'src/models/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames()
      .subscribe(
        games => {
          this.games = games.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
          })
        },
        error => console.log(error)
      );
  }

}
