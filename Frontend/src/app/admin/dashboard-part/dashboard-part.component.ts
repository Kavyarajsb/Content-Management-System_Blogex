import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
@Component({
  selector: 'app-dashboard-part',
  templateUrl: './dashboard-part.component.html',
  styleUrls: ['./dashboard-part.component.css']
})
export class DashboardPartComponent implements OnInit {
  constructor(private service :AdminService) { }
  post = [{ description: '', email: '', heading: '',_id:'' }];
  name = [
    {
      categoryTitle: '',
    },
  ];
  ngOnInit(): void {
    this.service.viewLatestPost().subscribe((data) => {
      console.log(data);
      let x = JSON.parse(JSON.stringify(data));
      this.post = x;
    });
    this.service.viewCategory().subscribe((data) => {
      console.log('the data from back', data);
      let x = JSON.parse(JSON.stringify(data));
      console.log('x is ', x);
      this.name = x;
    });
  }
  onclick(data: any) {
    console.log(data);
    localStorage.removeItem('category');
    localStorage.setItem('category', data);
  }
  
  preview(id: any) {
    localStorage.removeItem('previewid');
    localStorage.setItem('previewid', id);
  }

}