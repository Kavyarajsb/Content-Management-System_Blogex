import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSinglePostComponent } from './user-single-post.component';

describe('UserSinglePostComponent', () => {
  let component: UserSinglePostComponent;
  let fixture: ComponentFixture<UserSinglePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSinglePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
