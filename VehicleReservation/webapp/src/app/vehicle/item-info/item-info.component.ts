import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { vehicleItem } from '../vehicle-item';
import { VehicleService } from '../VehicleService.service';
import { AuthServiceService } from 'src/app/site/auth-service.service';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Booking } from 'src/app/booking/Booking';
import { MenuItemService } from 'src/app/service/menu-item.service';
import { BookingServiceService } from 'src/app/booking/booking/BookingService.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  @Input() vehicleItem:vehicleItem;
  @Output() addToCartClicked = new EventEmitter();
  isAdmin:boolean;
  BookForm:FormGroup;
  clickname:String =null;
  cartAddedId:number;
  bookingEmpty:boolean;
  dateAvailable:boolean;


  constructor(private vehicleService:VehicleService,private authService:AuthServiceService,private router: Router,private formbuilder: FormBuilder,private menuItemService:MenuItemService,private bookingService:BookingServiceService) { }
  

  ngOnInit() {

    if(this.authService.loggedIn){
      this.bookingService.getAllBookings();
    }

    this.isAdmin=this.vehicleService.isAdmin;
    this.BookForm=this.formbuilder.group({
      startingDate:["",[Validators.required]],
      endingDate:["",[Validators.required]]
    })
  }
  delete(id:number){
    this.vehicleService.deleteVehicle(id).subscribe(data=>{this.vehicleService.getAllMenuItems();})
  
    window.alert("Deleted Succesfully")
    this.router.navigate(['add/'])
  }
  get startingDate() {
    return this.BookForm.get('startingDate');
  }
  get endingDate() {
    return this.BookForm.get('endingDate');
  }
  // onSubmit(){
  //   if(this.authService.loggedIn==true){
  //     this.addToCartClicked.emit(this.vehicleItem.id);
  //   }
  //   else{
  //     this.router.navigateByUrl('login');
  //     this.foodService.clickedOnAdd=true;
  //   }
    
  // }

  onSubmit(id:number){
    console.log(this.BookForm.value)
    // this.foodService.getVehicleById(id).subscribe(data=>{this.vehicleItem=data})
    // console.log(this.vehicleItem);
    // this.vehicleItem.status=false;
    // this.foodService.save(this.vehicleItem);
    // console.log(this.vehicleItem);

    let newBooking:Booking={bookingStart:this.BookForm.value["startingDate"],bookingEnd:this.BookForm.value["endingDate"]}
    this.menuItemService.addCartItem(id,newBooking).subscribe(data=>{
      console.log(data)
      this.router.navigate(['cart'])
    });
   

  }
  moreDetails(vehicleItem:vehicleItem){
      // this.nextDate=new Date(this.Bookingform.value["endDate"])
      // this.nextDate.setDate(this.nextDate.getDate()+1);
      // console.log(this.Bookingform.value["endDate"])
    this.clickname=vehicleItem.name;
    vehicleItem.insuranceExpDate=new Date(vehicleItem.insuranceExpDate)
    if(vehicleItem.insuranceExpDate>= new Date()){
      this.dateAvailable=false;
  
    }
    else{
      this.dateAvailable=true;
    }
    }
    lessDetails(){
      this.clickname=null;
      console.log(this.clickname);
      
    }
    

}
