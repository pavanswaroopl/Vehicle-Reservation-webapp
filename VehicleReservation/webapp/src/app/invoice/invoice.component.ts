import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking/booking/BookingService.service';
import { Booking } from '../booking/Booking';
import { Router } from '@angular/router';
import { MenuItemService } from '../service/menu-item.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  booking:Booking;
  price:number;
  price1:number;




  constructor(private bookingService:BookingServiceService,private router:Router,private menuservice:MenuItemService) { }

  ngOnInit() {
    this.bookingService.getAllBookings();
    this.price=this.bookingService.booking.price-this.bookingService.booking.price*0.05;
    this.price1=this.bookingService.booking.price-this.bookingService.booking.price*0.10;
    
  }
  onSubmit(){
    
   }
   removeFromCart(cartId){
    this.menuservice.deleteCartItem(cartId).subscribe(data=>{this.bookingService.getAllBookings()});
    window.alert("Thank You We Have Recieved Your Payment")
    this.router.navigate(['search-bar/']);
  }
 
 

}
