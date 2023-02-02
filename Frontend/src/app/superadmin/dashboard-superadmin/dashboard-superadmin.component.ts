import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AdminService } from 'src/app/shared/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-superadmin',
  templateUrl: './dashboard-superadmin.component.html',
  styleUrls: ['./dashboard-superadmin.component.css']
})
export class DashboardSuperadminComponent implements OnInit {

  constructor(private service :AdminService) { }
  post = [{ description: '', email: '', heading: '',_id:'' }];
  ngOnInit(): void {
    this.service.viewLatestPost().subscribe((data) => {
      console.log(data);
      let x = JSON.parse(JSON.stringify(data));
      this.post = x;
    });
  }
  preview(id: any) {
    localStorage.removeItem('previewid');
    localStorage.setItem('previewid', id);
  }

}




