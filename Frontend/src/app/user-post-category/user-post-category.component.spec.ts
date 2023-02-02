import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostCategoryComponent } from './user-post-category.component';

describe('UserPostCategoryComponent', () => {
  let component: UserPostCategoryComponent;
  let fixture: ComponentFixture<UserPostCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
