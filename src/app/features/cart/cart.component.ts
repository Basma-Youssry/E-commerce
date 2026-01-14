import { Component, inject, OnInit } from '@angular/core';
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

  cartDetails:Cart = {} as Cart;
  
  cartCount!:number;

  ngOnInit(): void {
    this.getLoggedUserData();
  }

  getLoggedUserData():void{
    this.cartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.cartDetails = res.data;
        // console.log(this.cartDetails);
        
      }
      // Handling Errors inside Interceptop

    })
  }

  removeItem(id:string):void{
    this.cartService.removeSpecificCartItem(id).subscribe({
      next:(res)=>{
       this.cartDetails = res.data;        
      }
      // Handling Errors inside Interceptop

    })
  }

  updateCartProduct(id:string, count:number):void{
    this.cartService.updateCartProductCount(id, count).subscribe({
      next: (res)=>{
         
       this.cartDetails = res.data;
         
      }
      // Handling Errors inside Interceptop
    })
  }
}
