import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../../services/game.service';
import { DiscussionService } from '../../../services/discussion.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { Game } from 'src/models/game.model';

@Component({
  selector: 'app-add-discussion',
  templateUrl: './add-discussion.component.html',
  styleUrls: ['./add-discussion.component.scss']
})

export class AddDiscussionComponent implements OnInit {
  discussionForm: FormGroup;
  id: string;
  games: Game[]

  constructor(private discussionService:DiscussionService, private gameService: GameService, private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.discussionForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      gameId: new FormControl('', [
        Validators.required
      ]),
      content: new FormControl('', [
        Validators.required
      ]),
    });

    this.route.params.pipe(
      filter(params => params['id']),
      filter(params => !!params),
      tap(param => this.id = param.id))
      .subscribe(
        res => this.getGamebyId()
      )
      if(this.id == null) this.getGames();

      
  }


  getGamebyId(){
    this.gameService.getSingleGame(this.id)
      .subscribe(
        game => {
          this.games = [game];
          this.discussionForm.controls['gameId'].setValue(this.games[0]._id, {onlySelf: true});
        },
        error => console.log(error)
      );
      
  }
  getGames(){
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
          });
          this.discussionForm.controls['gameId'].setValue(this.games[0]._id, {onlySelf: true})
        },
        error => console.log(error)
      );
      
  }

  get name() {
    return this.discussionForm.get('name');
  }

  get content() {
    return this.discussionForm.get('content')
  }

  get gameId() {
    return this.discussionForm.get('gameId');
  }

  onSubmit() {
    let user = this.authService.getUser();
    if(!user || user == '') user = "[deleted]"
    this.discussionService.addDiscussion(this.name.value, this.content.value, this.gameId.value, user)
  }
  

}
