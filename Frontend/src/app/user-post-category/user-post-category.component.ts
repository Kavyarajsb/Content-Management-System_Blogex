import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-user-post-category',
  templateUrl: './user-post-category.component.html',
  styleUrls: ['./user-post-category.component.css']
})
export class UserPostCategoryComponent implements OnInit {
  y=localStorage.getItem("category");
  posts=[{
    heading:'',
    description:'',
    _id:'',
    email:''
  
  }]
    constructor(private service:UserService) { }
  
    ngOnInit(): void {
      console.log("hah")
      let x = localStorage.getItem("category");
  this.service.viewPostsInCategory(x).subscribe((data)=>{
    console.log("from backend",data);
    let post=JSON.parse(JSON.stringify(data))
    this.posts = post
  })
    }
    preview(id: any) {
      localStorage.removeItem('previewid');
      localStorage.setItem('previewid', id);
    }
  }
