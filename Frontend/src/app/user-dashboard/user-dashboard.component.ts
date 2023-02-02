import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatMenuTrigger} from '@angular/material/menu';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor(private _router: Router,private observer: BreakpointObserver) { }

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
    localStorage.removeItem('user-token')
    this._router.navigate([''])
    .then(() => {
      window.location.reload();
    });
  }

}
