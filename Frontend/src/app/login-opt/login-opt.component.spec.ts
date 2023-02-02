import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOptComponent } from './login-opt.component';

describe('LoginOptComponent', () => {
  let component: LoginOptComponent;
  let fixture: ComponentFixture<LoginOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
