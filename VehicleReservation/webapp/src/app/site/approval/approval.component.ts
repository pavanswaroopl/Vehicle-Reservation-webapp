import { Component, OnInit } from '@angular/core';
import { MenuItemService } from 'src/app/service/menu-item.service';
import { user } from '../signup/user';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  pendingUserList;

  constructor(private menuService:MenuItemService) { }

  ngOnInit() {
    this.menuService.getPendingData().subscribe(data=>{
      this.pendingUserList=data;
    },
    (error)=>{
      console.log(error);
    })

  }
  approve(user:user){
    user.status="A";
    this.menuService.editUserData(user).subscribe(data=>{
      this.pendingUserList=data;
    })
  }
  deny(user:user){
    user.status="D";
    this.menuService.editUserData(user).subscribe(data=>{
      this.pendingUserList=data;
    })
  }

}
