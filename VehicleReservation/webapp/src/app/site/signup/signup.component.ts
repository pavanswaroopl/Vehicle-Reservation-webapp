import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';
import { user } from './user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  error:string = '';
  formSubmitted:boolean = false;
  // userList:user[];

  
  constructor(private formBuilder:FormBuilder,private userService:UserServiceService,private authService:AuthServiceService) { }

  ngOnInit() {
    // this.userList = this.userService.userList;
    this.signUpForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.pattern('^[a-z A-Z]+$'), Validators.maxLength(50)]),
      'lastname': new FormControl(null, [Validators.required, Validators.pattern('^[a-z A-Z]+$'), Validators.maxLength(50)]),
      'age' : new FormControl(null,[Validators.required,Validators.pattern('^[0-9]+\.[0-9]*$'), Validators.maxLength(2)]),
      'gender' : new FormControl(null,Validators.required),
      'contact' : new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+\.[0-9]*$'),Validators.maxLength(10),Validators.minLength(6)]),
      'username': new FormControl(null, [Validators.required, Validators.maxLength(20),Validators.minLength(4)]), 
      'password': new FormControl(null, [Validators.required,  Validators.minLength(8)]),
      'confirmPassword': new FormControl(null, [Validators.required, this.matchConfirmPassword.bind(this)]),
      'email':new FormControl(null,[Validators.required]),
      'branch':new FormControl(null,[Validators.required])
    });
    

  }
  get username() {
    return this.signUpForm.get('username');
  }
  get firstname() {
    return this.signUpForm.get('firstname');
  }
  get lastname() {
    return this.signUpForm.get('lastname');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get gender(){
    return this.signUpForm.get('gender');
  }
  get roles(){
    return this.signUpForm.get('roles');
  }
  get age(){
    return this.signUpForm.get('age');
  }
  get branch(){
    return this.signUpForm.get('branch');
  }
  get contact(){
    return this.signUpForm.get('contact');
  }
  get email(){
    return this.signUpForm.get('email');
  }

  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }
  
  

}

