import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdetailsService } from './services/productdetails.service';
import { IProduct } from '../../core/interfaces/Iproduct.interface';
import { CartService } from '../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { log } from 'console';
import { Cart } from '../cart/models/interfaces/cart.interface';


@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class DetailsComponent implements OnInit{
  private readonly  activatedRoute = inject(ActivatedRoute);
  private readonly  productdetailsService = inject(ProductdetailsService);
  private readonly  cartService = inject(CartService);
  private readonly  toastrService = inject(ToastrService);
  id:string|null = null;
  productDetails:IProduct = {} as  IProduct;
  carItem:any;

  ngOnInit(): void {
    this.getProductId();
    this.getProductDetailsData();
    this.getLoggedUserCart();
  }
  getProductId():void{
    this.activatedRoute.paramMap.subscribe({
      next: (urlParams)=>{
       this.id = urlParams.get('id');

        console.log( urlParams.get('id'));
      }
    })
  }

  getProductDetailsData():void{
    this.productdetailsService.getProductDetails(this.id).subscribe({
      next:(res)=>{
        this.productDetails = res.data;

        console.log(this.productDetails);
                
      }
    })
  }

  getProductCartData(id:string):void{
    this.cartService.addProductToCart(id).subscribe({
      next: (res)=>{
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

  getLoggedUserCart():void{
    this.cartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.carItem = res.data.products.find(
          (item:any)=> item.product._id === this.productDetails._id
        );

        console.log(this.carItem);
        
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  updateCartProductCount(id:string, count:number):void{
    this.cartService.updateCartProductCount(id, count).subscribe({
      next: (res)=>{
       
     this.carItem = res.data.products.find(
          (item:any) => item.product._id === id
        )
        console.log(this.carItem);
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

}
