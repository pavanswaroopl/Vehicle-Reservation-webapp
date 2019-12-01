import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { vehicleItem } from '../vehicle/vehicle-item';
import { AuthServiceService } from '../site/auth-service.service';
import { Booking } from '../booking/Booking';
import { user } from '../site/signup/user';


@Injectable({
  providedIn: 'root'
})

export class MenuItemService {
  username:String;


  constructor(private http: HttpClient,private authservice:AuthServiceService,) { }
//   getAllMenuItems():Observable<any>{
//   //   console.log("hola")
//   //   let username='user'
//   //   let password='pwd'
//   //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
//   //   return this.httpClient.get<foodItem[]>(`${environment.baseUrl}`+'menu-items',{headers})
//     if(this.authservice.loggedIn){
//       this.foodservice.isLoggedIn=true;
//       const headers = new HttpHeaders({ Authorization: 'Bearer ' + btoa(this.authservice.accessToken) });
//       return this.httpClient.get<foodItem[]>(`${environment.baseUrl}`+'menu-items',{headers})
//     }
//     else return this.httpClient.get<foodItem[]>(`${environment.baseUrl}`+'menu-items')
// }

addCartItem(vehicleItemId:number,booking:Booking):Observable<any>{
  const headers = new HttpHeaders({ Authorization: 'Bearer ' +  this.authservice.accessToken});
  return this.http.post<vehicleItem>(`${environment.baseUrl}`+'booking/'+this.authservice.username+'/'+vehicleItemId,booking,{headers})
}
getAllCartItems():Observable<any>{
  const headers = new HttpHeaders({ Authorization: 'Bearer ' +  this.authservice.accessToken});

  return this.http.get<vehicleItem>(`${environment.baseUrl}`+'booking/'+this.authservice.username,{headers})
}
deleteCartItem(movieItemId:number):Observable<any>{
  const headers = new HttpHeaders({ Authorization: 'Bearer ' +  this.authservice.accessToken});
  return this.http.delete<vehicleItem>(`${environment.baseUrl}`+'booking/'+this.authservice.username+'/'+movieItemId,{headers})
}
getPendingData():Observable<any>{
  const headers = new HttpHeaders({ Authorization: 'Bearer ' +  this.authservice.accessToken});
  return this.http.get(`${environment.baseUrl}`+'users'+"/pendingRegistration",{headers})
}
editUserData(user:user):Observable<any>{
  const headers = new HttpHeaders({ Authorization: 'Bearer ' +  this.authservice.accessToken});
  return this.http.post(`${environment.baseUrl}`+'users'+"/editPendingUserStatus",user,{headers})
}

}


