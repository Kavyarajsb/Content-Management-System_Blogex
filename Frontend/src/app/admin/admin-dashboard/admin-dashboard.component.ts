import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AdminService } from 'src/app/shared/admin.service';
import { Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor(private service : AdminService, private location: Location,private _router: Router,private observer: BreakpointObserver) { }

  isSticky: boolean = false;


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 1;
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  logout() {
    localStorage.removeItem('admin-token')
    this._router.navigate([''])
  }
  viewCategorys(){
    this.service.GetPostAndCategory().subscribe((data)=>{
      console.log("inside the ts file data from backend",data)
    })
  }

}
