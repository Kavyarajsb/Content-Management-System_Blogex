import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPartComponent } from './dashboard-part.component';

describe('DashboardPartComponent', () => {
  let component: DashboardPartComponent;
  let fixture: ComponentFixture<DashboardPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
