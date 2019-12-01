import { Component, OnInit, Input } from '@angular/core';
import { VehicleService } from '../VehicleService.service';
import { vehicleItem } from '../vehicle-item';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private vehicleService:VehicleService,private route : ActivatedRoute,private router:Router) { }
  @Input() filterlist:vehicleItem[];
  isAdmin:boolean;
  sortkey:string;
  vehicleItem:vehicleItem[];
  ngOnInit() {
    this.vehicleService.getAllMenuItems().subscribe(data=>this.filterlist=data)
    // this.isAdmin=this.foodService.isAdmin;
  //   if(this.isAdmin){}
  //   this.foodService.getMenu().subscribe(vehicleItem => this.vehicleItem=vehicleItem)
  //   this.foodService.getSubject().subscribe(data=>{this.vehicleItem=this.foodService.getItem(data)})
  //   console.log(this.vehicleItem)
    
  //   this.isAdmin = this.foodService.isAdmin;
  // if(this.isAdmin){
  //  this.vehicleItem = this.foodService.getvehicleItem();
  //  //this.menuService.getAllMenuItems().subscribe(data=>{(this.vehicleItem=data)});
  //   this.foodService.getSubject().subscribe((data) => {
  //     this.vehicleItem=this.foodService.getItem(data)
  //   });

    this.vehicleService.getSubject().subscribe((data) => {
      this.filterlist=this.vehicleService.getItem(data)
    });


    this.router.navigate(['search-bar'])
    this.isAdmin=this.vehicleService.isAdmin;
  }
  search(event:any){
    console.log("search value: "+event.target.value)
    this.vehicleService.getSubject().next(event.target.value)
  }
  sortFunction(){
    console.log("ygfjuhg");
    // this.filterlist=this.vehicleItem;
    
    console.log(this.filterlist);
    
    if(this.sortkey=="seater"){
      console.log("in seater");
      
      this.filterlist=this.filterlist.sort((a:vehicleItem, b:vehicleItem): number =>{
        if(+a.seater>+b.seater)
          return 1;
        else
          return -1;
      })
    }
    if(this.sortkey=="type"){
      console.log("in type");
      this.filterlist=this.filterlist.sort((a:vehicleItem, b:vehicleItem): number =>{
        if(a.type>b.type)
          return 1;
        else
          return -1;
      })
    }
    if(this.sortkey=="price"){
      console.log("in price");
      this.filterlist=this.filterlist.sort((a:vehicleItem, b:vehicleItem): number =>{
        if(a.price>b.price)
          return 1;
        else
          return -1;
      })
    }
    console.log(this.filterlist);
    
  }
  

  

}
