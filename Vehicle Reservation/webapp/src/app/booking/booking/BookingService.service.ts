import { Injectable, Output, EventEmitter } from '@angular/core';
import { Booking } from '../Booking';
import { VehicleService } from 'src/app/vehicle/VehicleService.service';
import { MenuItemService } from 'src/app/service/menu-item.service';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  @Output() cartUpdated = new EventEmitter();

  booking:Booking={id:0,bookingEnd:null,bookingStart:null,vehicle:[],price:0};
  bookingEmpty:boolean=false;


  constructor(private menuService:MenuItemService) { }

  getAllBookings(){
    this.menuService.getAllCartItems().subscribe(data=>{
      this.booking=data;
      console.log(data)
      if(this.booking == null){
        this.bookingEmpty=true;
      }
      else{
        this.bookingEmpty=false;

      }
      
    })

    // return this.favorites;
  }
}
