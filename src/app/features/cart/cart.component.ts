import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './models/interfaces/cart.interface';
import { CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit{
  private readonly  cartService= inject(CartService);

  //Signals syntax
  cartDetails:WritableSignal<Cart> = signal({} as Cart);
  // cartCount:WritableSignal<number> = signal(0);


  //Zone.js syntax
  // cartDetails:Cart = {} as Cart;
  // cartCount!:number;

  ngOnInit(): void {
    this.getLoggedUserData();
  }

  getLoggedUserData():void{
    this.cartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.cartDetails.set(res.data);
        // console.log(this.cartDetails);
        
      }
      // Handling Errors inside Interceptop

    })
  }

  removeItem(id:string):void{
    this.cartService.removeSpecificCartItem(id).subscribe({
      next:(res)=>{
        this.cartService.countNumber.set(res.numOfCartItems);
       this.cartDetails.set(res.data);        
      }
      // Handling Errors inside Interceptop

    })
  }

  updateCartProduct(id:string, count:number):void{
    this.cartService.updateCartProductCount(id, count).subscribe({
      next: (res)=>{
         
       this.cartDetails.set(res.data);
         
      }
      // Handling Errors inside Interceptop
    })
  }
}
