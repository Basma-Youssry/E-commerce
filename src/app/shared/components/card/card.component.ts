import { Component, inject, Input, input } from '@angular/core';
import { IProduct } from '../../../core/interfaces/Iproduct.interface';
import { Icategory } from '../../../features/home/interfaces/icategory.interface';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TermPipe } from '../../pipes/term-pipe';
import { CartService } from '../../../features/cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink, TermPipe, RouterLinkActive],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  private readonly  cartService= inject(CartService);
  private readonly  toastrService= inject(ToastrService);
  @Input() product?:IProduct;
  @Input() category?:Icategory;
  @Input() categoryName?:string = ' ';
  @Input() activeCategory?:string = ' ';
  @Input() price?:number;
  @Input() showOrderData:boolean = false;
  

  getProductCartData(id:string):void{
    this.cartService.addProductToCart(id).subscribe({
      next:(res)=>{
        if(res.status === "success"){
          this.toastrService.success(res.message, "Shoppavia");
        }
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
