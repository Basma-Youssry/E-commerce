import { Component, inject, Input, input, InputSignal, signal } from '@angular/core';
import { IProduct } from '../../../core/interfaces/Iproduct.interface';
import { Icategory } from '../../../features/home/interfaces/icategory.interface';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TermPipe } from '../../pipes/term-pipe';
import { CartService } from '../../../features/cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../features/cart/models/interfaces/cart.interface';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink, TermPipe, TranslatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  private readonly  cartService= inject(CartService);
  private readonly  toastrService= inject(ToastrService);
  private readonly  translateService= inject(TranslateService);
  
  //Signal syntax
  product:InputSignal<IProduct | undefined> = input<IProduct>();
  category:InputSignal<Icategory | undefined> = input<Icategory>();
  categoryName:InputSignal<string> = input('');
  activeCategory:InputSignal<string> = input<string>('');
  price:InputSignal<number | undefined> = input<number>();
  showOrderData:InputSignal<boolean | undefined> = input<boolean>();
  //zone syntax
  // @Input() product?:IProduct;
  // @Input() category?:Icategory;
  // @Input() categoryName?:string = ' ';
  // @Input() activeCategory?:string = ' ';
  // @Input() price?:number;
  // @Input() showOrderData:boolean = false;
  

  getProductCartData(id:string):void{
    this.cartService.addProductToCart(id).subscribe({
      next:(res)=>{
        
        if(res.status === "success"){

          this.cartService.countNumber.set(res.numOfCartItems);
          // console.log(res.numOfCartItems);
          // console.log(this.cartService.countNumber);

          this.toastrService.success(res.message, "Shoppavia");
        }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  currentLang():boolean{
   return this.translateService.currentLang === 'ar';
  }

  // translateTitle(title: string): string {
  // if (!this.currentLang()) return title;

  // let result = title.replace('Woman', '').replace('حريمي', '').trim();

  // result = result
  //   .replace('Standart',  'ستاندرد')
  //   .replace('Shawl',  'شال')
  //   .replace('Brown', 'بنى ')
  //   .replace('Bordeaux', 'نبيتى ');

  // result = result.trim() + 'نسائى' ;
  // return result


  // }

translateDynamicTitle(title: string) {
  return title
    .split(' ')
    .map(word => this.translateService.instant(`title.${word.toLowerCase()}`) || word)
    .join(' ');
}


}

