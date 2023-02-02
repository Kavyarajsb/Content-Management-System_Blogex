import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/shared/superadmin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  constructor(private service:SuperadminService) { }
  users=[{email:'',
  isAdmin:'',
  }]
  ngOnInit(): void {
    this.service.viewAllUsers().subscribe((data)=>{
      // console.log("from backend",data)
      let x = JSON.parse(JSON.stringify(data));
      this.users=x
      console.log("users",this.users)
    })
  }
  changePrivilage(data:any){
    console.log("data",data);
        this.service.editPrivilage(data).subscribe((data)=>{
          console.log("from back",data);
          let x = JSON.stringify(data)
          if(x.match(/updated/)){
            console.log(true)
          }
          this.ngOnInit();
        })
        
      }
    }