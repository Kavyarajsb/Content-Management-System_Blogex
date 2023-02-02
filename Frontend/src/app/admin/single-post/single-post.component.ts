import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  data={
    email: '', heading: '', description: '',category:''
  }
  constructor(private service:AdminService) { }

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
