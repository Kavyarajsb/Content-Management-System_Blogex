import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreationAdminComponent } from './category-creation-admin.component';

describe('CategoryCreationAdminComponent', () => {
  let component: CategoryCreationAdminComponent;
  let fixture: ComponentFixture<CategoryCreationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCreationAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCreationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
