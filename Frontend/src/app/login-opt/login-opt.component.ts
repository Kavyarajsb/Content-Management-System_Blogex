import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-opt',
  templateUrl: './login-opt.component.html',
  styleUrls: ['./login-opt.component.css']
})
export class LoginOptComponent implements OnInit {

  constructor(private dialog: MatDialogRef<LoginOptComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
console.log('Data', data);
}

  ngOnInit(): void {
  }



  close() {
    this.dialog.close();    
  }

}
