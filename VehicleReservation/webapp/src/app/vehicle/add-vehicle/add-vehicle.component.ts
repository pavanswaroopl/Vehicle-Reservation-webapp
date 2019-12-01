import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../VehicleService.service';
import { vehicleItem } from '../vehicle-item';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  Seaters=[2,4,6];
  types=["Petrol","Diesel","Electric","Gas"];
  addVehicleForm: FormGroup;
  saved:boolean=false;


  constructor(private formBuilder: FormBuilder,public router:Router,private vehicleService:VehicleService) { }
    
  

  

  ngOnInit() {
      this.addVehicleForm=this.formBuilder.group({
        name:["",[Validators.required]],
        vehicleNo:["",[Validators.required,Validators.maxLength(10)]],
        image:["",[Validators.required]],
        price:["",[Validators.required]],
        seater:["",[Validators.required]],
        type:["",[Validators.required]],
        active:["",[Validators.required]],
        branch:["",[Validators.required,Validators.maxLength(5)]],
        insuranceExpDate:["",[Validators.required]],
        lastServiceDate:["",[Validators.required]],
        serviceDueDate:["",[Validators.required]]
      })
    }
   
  

  get name() { 
    return this.addVehicleForm.get('name'); }
    
  get vehicleNo() { 
    return this.addVehicleForm.get('vehicleNo'); }
    
  get image() { 
    return this.addVehicleForm.get('image'); }
    
  get price() { 
    return this.addVehicleForm.get('price'); }
    
  get seater() { 
    return this.addVehicleForm.get('seater'); }
    
  get type() { 
    return this.addVehicleForm.get('type'); }
    
  get active() { 
    return this.addVehicleForm.get('active'); }
    
  get branch() { 
    return this.addVehicleForm.get('branch'); }
    
  get insuranceExpDate() { 
    return this.addVehicleForm.get('insuranceExpDate'); }
    
  get lastServiceDate() { 
    return this.addVehicleForm.get('lastServiceDate'); }
    
  get serviceDueDate() { 
    return this.addVehicleForm.get('serviceDueDate'); }


    onSubmit() {
      let newItem:vehicleItem={name:this.addVehicleForm.value["name"],vehicleNo:this.addVehicleForm.value["vehicleNo"],image:this.addVehicleForm.value["image"],
      price:this.addVehicleForm.value["price"],seater:this.addVehicleForm.value["seater"],type:this.addVehicleForm.value["type"],active:this.addVehicleForm.value["active"],
      branch:this.addVehicleForm.value["branch"],insuranceExpDate:new Date(this.addVehicleForm.value["insuranceExpDate"]),lastServiceDate:new Date(this.addVehicleForm.value["lastServiceDate"]),
      serviceDueDate:new Date(this.addVehicleForm.value["serviceDueDate"])};
      this.vehicleService.addNewVehicle(newItem).subscribe(data=>{
        this.router.navigate(['search-bar'])
      })
    
    }
}
