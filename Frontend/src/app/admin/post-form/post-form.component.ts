import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private service:AdminService,private route:Router) { }

  ngOnInit(): void {
  }
update(data:any){
  console.log(data)
  this.service.updatePost(data).subscribe((data)=>{
    console.log("from back",data)
    this.ngOnInit();
    let x =JSON.stringify(data)
    if(x.match(/updated/)){
        this.ngOnInit();
}})
    }
  }

