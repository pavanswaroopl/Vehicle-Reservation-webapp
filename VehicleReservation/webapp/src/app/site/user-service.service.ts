import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { user } from './signup/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userExist:boolean=true;

  // userList = [
  //   {username:'admin',firstname:"Pavan",lastname:"Swaroop",password:"truYum"},
  //   {username:'rushhour',firstname:"jack",lastname:"jones",password:"whoru"}
  // ];
  
  constructor(private router:Router,private http:HttpClient) { }

  addUser(user:any) {
    let NewUsers:user={username:user['username'],firstname:user['firstname'],lastname:user['lastname'],password:user['password'],gender:user['gender'],age:user['age'],contact:user['contact'],email:user['email'],branch:user['branch']};
    console.log(NewUsers)
    this.addUsers(NewUsers).subscribe(data=>{this.userExist=data;
    if(data){
      window.alert("Your Details are Saved Successfully !")
      this.router.navigate(['login'])

    }
    }, (error)=>{console.log(error)})
   
  }

  addUsers(user:user):Observable<any>{
    return this.http.post<user>(environment.baseUrl+'auth-service/users',user);
  }
}