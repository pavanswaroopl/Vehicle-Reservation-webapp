import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from '../VehicleService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { vehicleItem } from '../vehicle-item';
import { AuthServiceService } from 'src/app/site/auth-service.service';


@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  vehicleItem:vehicleItem;
  form:FormGroup;
  saved:boolean=false;

  Seaters=[2,4,6];
  types=["Petrol","Diesel","Electric","Gas"];

  

  constructor(private fb: FormBuilder,private route : ActivatedRoute,public router:Router,private vehicleService:VehicleService) { }
    
  

  

  ngOnInit() {
    const vehicleItemId=this.route.snapshot.paramMap.get('id');
    // this.vehicleItem=this.movieService.getMovieItem(+vehicleItemId);
    this.vehicleService.getMenuItem(+vehicleItemId).subscribe(data=>{
      this.vehicleItem=data;
      this.vehicleItem.insuranceExpDate=new Date(this.vehicleItem.insuranceExpDate);
      this.vehicleItem.insuranceExpDate.setDate(this.vehicleItem.insuranceExpDate.getDate()+1);
      this.vehicleItem.lastServiceDate=new Date(this.vehicleItem.lastServiceDate);
      this.vehicleItem.lastServiceDate.setDate(this.vehicleItem.lastServiceDate.getDate()+1);
      this.vehicleItem.serviceDueDate=new Date(this.vehicleItem.serviceDueDate);
      this.vehicleItem.serviceDueDate.setDate(this.vehicleItem.serviceDueDate.getDate()+1);
      this.saved=true;
      this.form=this.fb.group({
        name:[this.vehicleItem.name],
        vehicleNo:[this.vehicleItem.vehicleNo],
        image:[this.vehicleItem.image,[Validators.required]],
        price:[this.vehicleItem.price,[Validators.required]],
        seater:[this.vehicleItem.seater,[Validators.required]],
        type:[this.vehicleItem.type,[Validators.required]],
        active:[this.vehicleItem.active,[Validators.required]],
        branch:[this.vehicleItem.branch,[Validators.required,Validators.maxLength(5)]],
        insuranceExpDate:[this.vehicleItem.insuranceExpDate.toISOString().substring(0,10),[Validators.required]],
        lastServiceDate:[this.vehicleItem.lastServiceDate.toISOString().substring(0,10),[Validators.required]],
        serviceDueDate:[this.vehicleItem.serviceDueDate.toISOString().substring(0,10),[Validators.required]]
      })
    })
   
  }

  get name() { 
    return this.form.get('name'); }
    
  get vehicleNo() { 
    return this.form.get('vehicleNo'); }
    
  get image() { 
    return this.form.get('image'); }
    
  get price() { 
    return this.form.get('price'); }
    
  get seater() { 
    return this.form.get('seater'); }
    
  get type() { 
    return this.form.get('type'); }
    
  get active() { 
    return this.form.get('active'); }
    
  get branch() { 
    return this.form.get('branch'); }
    
  get insuranceExpDate() { 
    return this.form.get('insuranceExpDate'); }
    
  get lastServiceDate() { 
    return this.form.get('lastServiceDate'); }
    
  get serviceDueDate() { 
    return this.form.get('serviceDueDate'); }


    onSubmit() {
      let newItem:vehicleItem={id:this.vehicleItem.id,name:this.form.value["name"],vehicleNo:this.form.value["vehicleNo"],image:this.form.value["image"],
      price:this.form.value["price"],seater:this.form.value["seater"],type:this.form.value["type"],active:this.form.value["active"],
      branch:this.form.value["branch"],insuranceExpDate:new Date(this.form.value["insuranceExpDate"]),lastServiceDate:new Date(this.form.value["lastServiceDate"]),
      serviceDueDate:new Date(this.form.value["serviceDueDate"])};
      this.vehicleService.save(newItem).subscribe(data=>{
        this.router.navigate(['search-bar'])
      })
    
    }




}
