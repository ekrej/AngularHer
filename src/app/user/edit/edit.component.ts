import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private authService: AuthService, private dialog: MatDialog, private _snackBar: MatSnackBar) { }
  editForm: FormGroup;
  ngOnInit() {
    this.editForm = new FormGroup({

      currentPassword: new FormControl('', [
        Validators.required
      ]),
      newPassword: new FormControl('', [
        Validators.required
      ])
    })
  }
  

get currentPassword() {
  return this.editForm.get('currentPassword');
}

get newPassword() {
  return this.editForm.get('newPassword');
}

onSubmitWarning(ref: TemplateRef<any>){
  this.dialog.open(ref);
}

onSubmit() {
  this.authService.updateUser(this.currentPassword.value, this.newPassword.value);
  this.dialog.closeAll();
}

cancel(){
  this.dialog.closeAll();
}
}