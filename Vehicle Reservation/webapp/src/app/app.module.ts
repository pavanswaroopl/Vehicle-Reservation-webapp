import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemInfoComponent } from './vehicle/item-info/item-info.component';
 import { MenuComponent } from './vehicle/menu/menu.component';
import { SearchComponent } from './vehicle/search/search.component';
import { CartComponent } from './booking/booking/booking.component';
import { ItemEditComponent } from './vehicle/item-edit/item-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './site/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './site/login/login.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { HttpClientModule } from '@angular/common/http';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { ApprovalComponent } from './site/approval/approval.component';

const appRoutes: Routes = [ 
  { path: '', redirectTo: 'search-bar', pathMatch:'full' },
  { path: 'edit-food-item/:id', component: ItemEditComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'cart', component: CartComponent,canActivate: [AuthGaurdService]},
  { path: 'login',component: LoginComponent},
  { path: 'search-bar',component: SearchComponent},
  { path: 'add',component: AddVehicleComponent},
  {path:'approval',component:ApprovalComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    ItemInfoComponent,
     MenuComponent,
     SearchComponent,
     CartComponent,
     ItemEditComponent,
     SignupComponent,
     HeaderComponent,
     LoginComponent,
     AddVehicleComponent,
     ApprovalComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
      
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
