import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-post-edit',
  templateUrl: './user-post-edit.component.html',
  styleUrls: ['./user-post-edit.component.css']
})
export class UserPostEditComponent implements OnInit {

  category = [
    {
      categoryTitle: '',
    },
  ];
  post = {
    heading:'',
    description:'',
    category:'',
  }
  constructor(private service: UserService ,private router:Router ) {}

  ngOnInit(): void {
    this.service.viewCategory().subscribe((data) => {
      // console.log(data);
      let x = JSON.parse(JSON.stringify(data));
      this.category = x;
      let postid = localStorage.getItem('postid');
      this.service.viewApost(postid).subscribe((data) => {
        // console.log(data);
        let p = JSON.parse(JSON.stringify(data))
        this.post = p;
      });
    });
  }
  editpost(){
    console.log(this.post);
    let postid = localStorage.getItem('postid');
    this.service.updatePost(this.post,postid).subscribe((data)=>{
      console.log("data",data);
      let x = JSON.stringify(data);
      if(x.match(/updated/)){
          this.router.navigate(["/dashboard"])
  }})
      }
    }