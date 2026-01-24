import { Component, inject, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { AuthService } from '../../core/auth/service/auth.service';
import { CurrencyPipe, DatePipe, isPlatformBrowser } from '@angular/common';
import { JwtPayload } from 'jwt-decode';
import { CartService } from '../cart/services/cart.service';
import { CardComponent } from "../../shared/components/card/card.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-allorders',
  imports: [CardComponent, DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css',
})
export class AllordersComponent implements OnInit {


private readonly authService= inject(AuthService);
private readonly cartService= inject(CartService);
private readonly plateFormId= inject(PLATFORM_ID);

//Signals syntax
userId:WritableSignal<string | null> = signal(null);
orders:WritableSignal<any> = signal(null);

//Zone.js syntax
// userId: string | null = null; // store user ID
// orders:any;

ngOnInit(): void {
  this.getUserId();
  this.getUserallOrders();
}

getUserId():void{
  if(isPlatformBrowser(this.plateFormId)){
    
   const decodeToken:any = this.authService.decodeToken();

   this.userId.set(decodeToken ? decodeToken.userId || decodeToken.id : null);

  //  console.log("User ID:", this.userId());
   
  }
}
getUserallOrders():void{
  this.cartService.getUserOrders(this.userId()).subscribe({
    next:(res)=>{
      this.orders.set(res);
      
      console.log(res);
      
    }
    // error:(err)=>{
    //   console.log(err);
      
    // }
  })
}
}
