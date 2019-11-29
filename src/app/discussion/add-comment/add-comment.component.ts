import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupName } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { CommentService } from 'src/services/comment.service';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() id: string
  @Input() onComment;
  @Input() onDiscussion;
  showIt: boolean;
  commentForm: FormGroup;

  constructor(private authService: AuthService, private commentService: CommentService) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      content: new FormControl('', [
        Validators.required
      ]),
    });
  }

  loadForm() {
    this.showIt = !this.showIt;
  }

  get content() {
    return this.commentForm.get('content')
  }

  onSubmit() {
    let user = this.authService.getUser();

    if (this.onDiscussion == true) {
      this.commentService.addCommentOnDiscussion(user, this.content.value, this.id)
    } else if (this.onComment == true) {
      this.commentService.addCommentOnComment(user, this.content.value, this.id)
    }

  }

}
