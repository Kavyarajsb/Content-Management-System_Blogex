import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostCreateComponent } from './user-post-create.component';

describe('UserPostCreateComponent', () => {
  let component: UserPostCreateComponent;
  let fixture: ComponentFixture<UserPostCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
