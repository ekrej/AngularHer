import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})

export class GameCardComponent implements OnInit {
  @Input() game: Game;
  date:string; 
  constructor() { }

  ngOnInit() {
    this.date = new Date(this.game.releaseDate).toLocaleDateString()
  }

}
