import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal, WritableSignal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdetailsService } from './services/productdetails.service';
import { IProduct } from '../../core/interfaces/Iproduct.interface';
import { CartService } from '../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { log } from 'console';
import { Cart } from '../cart/models/interfaces/cart.interface';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-details',
  imports: [TranslatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class DetailsComponent implements OnInit{
  private readonly  activatedRoute = inject(ActivatedRoute);
  private readonly  productdetailsService = inject(ProductdetailsService);
  private readonly  cartService = inject(CartService);
  private readonly  toastrService = inject(ToastrService);

  //Signal syntax
  id:WritableSignal<string | null> = signal(null);
  productDetails: WritableSignal<IProduct> = signal({} as IProduct);
  cartItem:WritableSignal<any> = signal(undefined);
  cartCount = computed(()=>{
    return this.cartItem()?.count ?? 0;
  })

  productId = computed(() => this.cartItem()?.product?._id ?? null);
  productCount:WritableSignal<number> = signal(0);
  flag:WritableSignal<boolean> = signal(true);
  //Zone.js syntax
  // id:string|null = null;
  // productDetails:IProduct = {} as  IProduct;
  // carItem:any;

  ngOnInit(): void {
    this.getProductId();
    this.getProductDetailsData();
    this.getLoggedUserCart();
  }
  getProductId():void{
    this.activatedRoute.paramMap.subscribe({
      next: (urlParams)=>{
       this.id.set(urlParams.get('id'));

        console.log( urlParams.get('id'));
      }
    })
  }

  getProductDetailsData():void{
    this.productdetailsService.getProductDetails(this.id()).subscribe({
      next:(res)=>{
        this.productDetails.set(res.data);

        console.log(this.productDetails);
                
      }
    })
  }

  getProductCartData(id:string):void{
    this.cartService.addProductToCart(id).subscribe({
      next: (res)=>{
        if(res.status === "success"){
          this.toastrService.success(res.message, "Shoppavia");
          
          const product = res.data.products.find(
          (item: any) => item.product === id
        );

        this.productCount.set(product.count);
        this.flag.set(false);
        // console.log(this.productCount);

        this.cartService.countNumber.set(res.numOfCartItems);
        console.log(res);

        }


      },
      // error:(err)=>{
      //   console.log(err);
        
      // }
    })
  }
  // getSpecificProduct(id:string):void{
  //   this.productdetailsService.getProductDetails(id).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //     }
  //   })
  // }
  getLoggedUserCart():void{
    this.cartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        const item = res.data.products.find(
          (item:any)=> item.product._id === this.productDetails()._id
        );

        this.cartItem.set(item);
        console.log(this.cartItem());
        
      },
      // error:(err)=>{
      //   console.log(err);
        
      // }
    })
  }

  updateCartProductCount(id:string, count:number):void{
    this.cartService.updateCartProductCount(id, count).subscribe({
      next: (res)=>{
       
     const item = res.data.products.find(
          (item:any) => item.product._id === id
        )
        this.cartItem.set(item);
        console.log(this.cartItem()); 
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

}
