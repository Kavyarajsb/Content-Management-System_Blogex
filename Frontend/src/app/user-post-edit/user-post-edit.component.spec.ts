import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostEditComponent } from './user-post-edit.component';

describe('UserPostEditComponent', () => {
  let component: UserPostEditComponent;
  let fixture: ComponentFixture<UserPostEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
