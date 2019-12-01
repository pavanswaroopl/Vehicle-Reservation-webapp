import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle/VehicleService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../site/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin:boolean;
  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['search-bar']);
    this.isAdmin=this.vehicleService.isAdmin;
  }

  constructor(private authService:AuthServiceService,public router: Router,private vehicleService:VehicleService) {  
  }
  title = 'truYum';
  isLoggedIn:boolean = false;
  

  loggedIn():boolean {
    if(!this.authService.loggedInUser.loggedOut){
      this.isLoggedIn = true;
      return true
    }
    else{
      this.isLoggedIn = false;
      return false;
    }
  }
  clickOnAddCart(){
    this.vehicleService.clickedOnAdd = false;
    this.vehicleService.addedToCart = false;
  }

}
