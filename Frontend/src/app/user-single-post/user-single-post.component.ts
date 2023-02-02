import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-user-single-post',
  templateUrl: './user-single-post.component.html',
  styleUrls: ['./user-single-post.component.css']
})
export class UserSinglePostComponent implements OnInit {
  constructor(private service : UserService) { }
data={
  email: '', heading: '', description: '',category:''
}
  ngOnInit(): void {
    let postid = localStorage.getItem("previewid")
    console.log(postid);
    this.service.viewApost(postid).subscribe((data)=>{
      console.log("from back",data);
      let x = JSON.parse(JSON.stringify(data));
this.data=x;
    })
  }

}

