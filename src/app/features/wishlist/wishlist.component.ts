import { Component, inject, OnInit, WritableSignal, signal } from '@angular/core';
import { WishlistService } from './services/wishlist.service';
import { TranslatePipe } from '@ngx-translate/core';
import { Cart } from '../cart/models/interfaces/cart.interface';
import { Wishlist } from './models/wishlist.interface';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  imports: [TranslatePipe, CurrencyPipe, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit{

  private readonly wishlistService = inject(WishlistService);
  private readonly cartService = inject(CartService);
  private readonly  toastrService= inject(ToastrService);
 
  wishListDetails:WritableSignal<Wishlist[]> = signal([]);

  ngOnInit(): void {
    this.getUserLoggedWishlistData();
  }

  getUserLoggedWishlistData():void{
    this.wishlistService.getLoggedUserWishList().subscribe({
      next:(res)=>{
        this.wishListDetails.set(res.data);

        console.log(this.wishListDetails());
        
      }
    })
  }

  removeProduct(id:string):void{
    this.wishlistService.removeWishlistProduct(id).subscribe({
      next:()=>{
        this.getUserLoggedWishlistData();
      }
    })
  } 

  addProductCart(id:string):void{
    this.cartService.addProductToCart(id).subscribe({
      next:(res)=>{
         if(res.status === "success"){

          this.cartService.countNumber.set(res.numOfCartItems);
          // console.log(res.numOfCartItems);
          // console.log(this.cartService.countNumber);

          this.toastrService.success(res.message, "Shoppavia");
        }
      }
    })
  }
}
