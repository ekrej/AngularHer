import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from 'src/models/discussion.model';
import { Game } from 'src/models/game.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { GameService } from 'src/services/game.service';
import { DiscussionService } from 'src/services/discussion.service';

@Component({
  selector: 'app-edit-discussion',
  templateUrl: './edit-discussion.component.html',
  styleUrls: ['./edit-discussion.component.scss']
})
export class EditDiscussionComponent implements OnInit {
  discussion: Discussion;
  id: string;
  games: Game[];
  discussionForm: FormGroup
  constructor(private route: ActivatedRoute, private gameService: GameService, private discussionService: DiscussionService) { }

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
      res => this.getDiscussion()
    )
   
  }

  getDiscussion(){
    console.log("id "+this.id)
    this.discussionService.getDiscussionbyId(this.id)
    .subscribe(
      discussion => {
        this.discussion = discussion;
        this.getGames();
      }
    )
  }

  getGames(){
    console.log("discussion: "+this.discussion.name)
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
          console.log(this.games)
          this.fillForm();
        },
        error => console.log(error)
      );
  }

  fillForm(){
    console.log(this.discussion.gameId)
    this.discussionForm.controls['gameId'].setValue(this.games.find(x => x._id == this.discussion.gameId)._id, {onlySelf: true});
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
    let discussion: Discussion = this.discussionForm.value;
    console.log(discussion);
    this.discussionService.updateDiscussion(this.name.value, this.content.value, this.gameId.value, this.id);
     
  }

}
