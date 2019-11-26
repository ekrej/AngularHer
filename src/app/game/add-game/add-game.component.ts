import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../../services/game.service';


@Component({
  selector: 'app-add-game',
  templateUrl: "./add-game.component.html",
  styleUrls: ['./add-game.component.scss']
})



export class AddGameComponent implements OnInit {
  gameForm: FormGroup;
  constructor(private fb: FormBuilder, private gameService: GameService) { }

  ngOnInit() {
    this.gameForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      releaseDate: new FormControl('', [
        Validators.required
      ]),
      categories: this.fb.array([]),
      developer: new FormControl('', [
        Validators.required
      ]),
    });
  }

  get categories() {
    return this.gameForm.controls.categories as FormArray;
  }

  get name() {
    return this.gameForm.get('name');
  }

  get releaseDate() {
    return this.gameForm.get('releaseDate');
  }

  get developer() {
    return this.gameForm.get('developer');
  }

  addcategory() {
    this.categories.push(this.fb.control('', [Validators.required]));
  }

  onSubmit() {
    this.gameService.addGame({ name: this.name.value, releaseDate: this.releaseDate.value, categorie: this.categories.value, developer: this.developer.value });
  }

}
