import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-new-post',
  templateUrl: './user-new-post.component.html',
  styleUrls: ['./user-new-post.component.css']
})
export class UserNewPostComponent implements OnInit {
  constructor(private service: UserService) {}
  category = [
    {
      categoryTitle: '',
    },
  ];
  post = [{ description: '', email: '', heading: '', _id: '' }];
  ngOnInit(): void {
    this.service.viewCategory().subscribe((data) => {
      let x = JSON.parse(JSON.stringify(data));
      console.log(x);
      this.category = x;
    });
    this.service.viewLatestPost().subscribe((data) => {
      console.log(data);
      let x = JSON.parse(JSON.stringify(data));
      this.post = x;
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
