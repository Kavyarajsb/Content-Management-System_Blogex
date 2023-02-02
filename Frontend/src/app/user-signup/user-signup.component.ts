import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  constructor(private user: UserService, private router: Router) {}

  form: FormGroup = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
   
  });
  // submitted = false;
  Signup = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };
  ngOnInit(): void {}
  hide = true;

  adduser() {
    if (this.form.invalid){
      return;
    }
    else{
      this.user.SignupUser(this.form.value).subscribe((data) => {
        console.log('subscribed in user-signup component', data);
      });
    } 
    this.router.navigate(['login'])
    .then(() => {
      window.location.reload();
    });
  }
}
