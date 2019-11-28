import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game.model';
import { GameService } from '../../../services/game.service';
import { Discussion } from 'src/models/discussion.model';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { DiscussionService } from 'src/services/discussion.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game: Game;
  discussions: Discussion[] | undefined
  date:string; 
  id: string
  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router, private discussionService: DiscussionService) { }

  ngOnInit() {
    
    this.route.params.pipe(
      filter(params => params['id']),
      filter(params => !!params),
      tap(param => this.id = param.id))
        .subscribe(
          res => this.getGameInfo()
        )
    
  }

  getGameInfo(){
    this.gameService.getSingleGame(this.id)
    .subscribe(game => {
      if(!game) this.router.navigate(['/error/not-found'])
      this.game = game;
      this.date = new Date(this.game.releaseDate).toLocaleDateString()
      console.log(this.game.categorie);
      this.getDiscussionsForGame()
    },
    error => {
      console.log(error);
      this.router.navigate(['/error/not-found']);
    });
  }

  getDiscussionsForGame(){
    this.discussionService.getDiscussionsOfGame(this.id)
    .subscribe( discussions => {
      console.log(discussions)
      this.discussions = discussions
    },
    error => {
      console.log(error);
    })
  }


}
