import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookingServiceService } from './BookingService.service';
import { Booking } from '../Booking';
import { VehicleService } from 'src/app/vehicle/VehicleService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemService } from 'src/app/service/menu-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class CartComponent implements OnInit {
booking:Booking;
  constructor(private bookingService:BookingServiceService,private vehicleService:VehicleService,private route : ActivatedRoute,private router:Router,private menuservice:MenuItemService) { }

  ngOnInit() {
    this.bookingService.getAllBookings();

  }
  removeFromCart(cartId){
    this.menuservice.deleteCartItem(cartId).subscribe(data=>{this.bookingService.getAllBookings()})
  }
  onSubmit(){
    alert("Thanks! We Recieved Your Payment. Your Car is Booked");

  }

}
