import { Component } from '@angular/core';
import { AuthServiceService } from './site/auth-service.service';
import { VehicleService } from './vehicle/VehicleService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['search-bar']);
  }

  constructor(private authService:AuthServiceService,public router: Router,private vehicleService:VehicleService) {  
  }
  title = 'Vehicle Reservation';
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
