import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../login/login.component';

export interface DialogData {
  msg: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  msg: string;
  name: string;
  email: string;
  result: any

  otherTheme: boolean = false;

  constructor(private router: Router, public dialog: MatDialog, public overlayContainer: OverlayContainer) {
    // overlayContainer.getContainerElement().classList.add('alternative');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MessageDialog, {
      width: '600px',
      data: { name: this.name, msg: this.msg, email: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.result = result
      // this.email = result.email
    });
  }

  login() {
    this.router.navigate(["login"]);
  }

  changeThemes() {
    this.otherTheme = !this.otherTheme;
    if (this.otherTheme === true) {
      this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
    }
  }

}

@Component({
  selector: 'message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.scss']
})
export class MessageDialog {
  otherTheme: boolean = false;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  config: any = {
    placeholder: 'enter your message here',
    tabsize: 2,
    height: 100,
    uploadImagePath: '',
    theme: 'flatly',
    toolbar: [
      // [groupName, [list of button]]
      ['misc', ['codeview', 'undo', 'redo']],
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }

  constructor(
    public dialogRef: MatDialogRef<MessageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      emailFormControl: [null, [Validators.email]],
    });
  }

  emailFormControl = new FormControl('', [
    Validators.email,
  ]);

  onNoClick(): void {
    this.dialogRef.close();
  }

}
