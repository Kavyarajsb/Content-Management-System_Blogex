import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 
  constructor( private service:UserService) { }
posts = [{
  _id:'',
heading:'',
description:''
}]
  ngOnInit(): void {
    let x=localStorage.getItem("email")
    console.log(x)
    this.service.viewYourPost(x).subscribe((data)=>{
      console.log(data);
      let y = JSON.parse(JSON.stringify(data));
      this.posts=y;
    })
  }
  delete(id:any){
      
      this.service.deletePost(id).subscribe((data)=>{
        console.log(data)
      })
      this.ngOnInit();
      window.location.reload();
   
  }
  savePostid(id:any){
    localStorage.removeItem("postid");
    localStorage.setItem("postid",id)
  }
  preview(id: any) {
    localStorage.removeItem('previewid');
    localStorage.setItem('previewid', id);
  }
}
