import { Component, OnInit, Input, Output } from '@angular/core';
import { vehicleItem } from '../vehicle-item';
import { VehicleService } from '../VehicleService.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() vehicleItem:vehicleItem[];
 addToCartClicked = new EventEmitter();
 isAdmin:boolean;

  constructor(private vehicleService:VehicleService,) { }

  

  ngOnInit() {
   
 

  // }});
  // this.foodService.getSubject().subscribe((data) => (
  //        this.vehicleItem=this.foodService.getItem(data)
  // ));
  }
  }
