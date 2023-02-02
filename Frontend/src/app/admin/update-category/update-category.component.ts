import { Component, OnInit,Inject } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  category={
    categoryTitle: '',
     description: '' 
  }
    constructor(private service:AdminService,@Inject(MAT_DIALOG_DATA) public data: any) { }
  
    ngOnInit(): void {
  
    }
    update(data:any){
      console.log("in form",data)
      this.service.updateCategory(data).subscribe((data)=>{
        console.log("from back",data);
        window.location.reload();
      });
    }
  
  }