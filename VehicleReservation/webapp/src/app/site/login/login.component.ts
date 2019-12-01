import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/vehicle/VehicleService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  loginClicked:boolean=false;

  constructor(private formBuild:FormBuilder,private authService:AuthServiceService,private router:Router,private vehicleService:VehicleService ) { }

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      username: ['',[
        Validators.required
      ]],
      password: ['',[
        Validators.required
      ]]
    })
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  toSignup() {
    this.router.navigate(['signup'])
  }
onSubmit(){
  this.authService.authenticateUser(this.loginForm.value);
  this.loginClicked=true;
}
}
