import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/services/comment.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {
  @Input() oldContent: string;
  @Input() id: string;
  @Input() discussion: string;
  commentForm: FormGroup;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      content: new FormControl('', [
        Validators.required
      ]),
    });
  }

  // loadForm() {
  //   this.showIt = !this.showIt;
  // }

  get content() {
    return this.commentForm.get('content')
  }

  onSubmit() {
      this.commentService.updateComment(this.content.value, this.id, this.discussion)
  }

}
