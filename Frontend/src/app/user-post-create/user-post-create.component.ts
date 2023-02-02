import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../shared/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-post-create',
  templateUrl: './user-post-create.component.html',
  styleUrls: ['./user-post-create.component.css']
})
export class UserPostCreateComponent implements OnInit {

  isEditable = true;
  constructor(private _formBuilder: FormBuilder,private service :UserService,private router :Router ) { }
data={
    heading:'',
    description:'',
    category:''
}
category=[{
  categoryTitle:''
}]
  ngOnInit(): void {
    this.service.viewCategory().subscribe((data)=>{
      console.log(data);
      let x = JSON.parse(JSON.stringify(data))
      this.category = x;
    })
  }
create(data:any){
  let email = localStorage.getItem("email")
  data.email = email;
  console.log(data)
this.service.createPost(data).subscribe((data)=>{
  console.log("from back",data)
  let x = JSON.stringify(data)
  if(x.match(/successfully/)){
    console.log("succ")
      this.router.navigate(['/dashboard'])
  }
})
}
}
