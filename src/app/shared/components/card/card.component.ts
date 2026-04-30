import { Component, inject, Input, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { IProduct } from '../../../core/interfaces/Iproduct.interface';
import { Icategory } from '../../../features/home/interfaces/icategory.interface';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TermPipe } from '../../pipes/term-pipe';
import { CartService } from '../../../features/cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../features/cart/models/interfaces/cart.interface';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { WishlistService } from '../../../features/wishlist/services/wishlist.service';


@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink, TermPipe, TranslatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  private readonly cartService = inject(CartService);
  private readonly toastrService = inject(ToastrService);
  private readonly translateService = inject(TranslateService);
  private readonly wishlistService = inject(WishlistService);

  //Signal syntax
  product: InputSignal<IProduct | undefined> = input<IProduct>();
  category: InputSignal<Icategory | undefined> = input<Icategory>();
  categoryName: InputSignal<string> = input('');
  activeCategory: InputSignal<string> = input<string>('');
  price: InputSignal<number | undefined> = input<number>();
  showOrderData: InputSignal<boolean | undefined> = input<boolean>();

  isWishlisted: WritableSignal<boolean> = signal(false);

  currentLang = this.translateService.currentLang;

  ngOnInit() {
    this.translateService.onLangChange.subscribe(lang => {
      this.currentLang = lang.lang;
    });

    console.log(this.category());
    
  }

  //zone syntax
  // @Input() product?:IProduct;
  // @Input() category?:Icategory;
  // @Input() categoryName?:string = ' ';
  // @Input() activeCategory?:string = ' ';
  // @Input() price?:number;
  // @Input() showOrderData:boolean = false;




  getProductCartData(id: string): void {
    this.cartService.addProductToCart(id).subscribe({
      next: (res) => {

        if (res.status === "success") {

          this.cartService.countNumber.set(res.numOfCartItems);
          // console.log(res.numOfCartItems);
          // console.log(this.cartService.countNumber);

          this.toastrService.success(res.message, "Shoppavia");
        }

      },
      error: (err) => {
        console.log(err);

      }
    })
  }

translateDynamicTitle(title: string): string {
  if (!title) return '';

  // 1️⃣ نحاول ترجمة الجملة كاملة
  const normalizedKey = this.normalize(title);
  const fullKey = `title.${normalizedKey}`;
  const fullTranslation = this.translateService.instant(fullKey);

  if (fullTranslation !== fullKey) {
    return fullTranslation; // ✅ لقينا ترجمة كاملة
  }

  // 2️⃣ fallback: ترجمة كلمة كلمة
  const words = title.split(' ');

  const translatedWords = words.map(word => {
    const key = `title.${word.toLowerCase()}`;
    const translated = this.translateService.instant(key);
    return translated === key ? word : translated;
  });

  // 3️⃣ ترتيب عربي بسيط (اختياري)
  if (this.translateService.currentLang === 'ar' && translatedWords.length === 2) {
    return `${translatedWords[1]} ${translatedWords[0]}`;
  }

  return translatedWords.join(' ');
}



normalize(title: string): string {
  return title
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/-/g, ' ')
    .trim()
    .replace(/\s+/g, '_');
}





  toggleWishlist() {
    this.isWishlisted.set(!this.isWishlisted());
  }

  getProductWishListData(id: string): void {
    this.wishlistService.addProductToWishList(id).subscribe({
      next: (res) => {
        console.log(res);

      }
    })
  }






translateCategoryName(name: string): string {
  if (!name) return '';

  const words = name.split(' ');

  const wordMap: Record<string, string> = {
    "women's": "women",
    "womens": "women",
    "men's": "men",
    "mens": "men"
  };

  const translatedWords = words.map(word => {
    const cleanWord = word.toLowerCase().replace(/['"]/g, '');
    const mappedWord = wordMap[cleanWord] || cleanWord;

    const key = `category.${mappedWord}`;
    const translated = this.translateService.instant(key);

    return translated !== key ? translated : word;
  });

  // عكس الترتيب في العربي
  if (this.translateService.currentLang === 'ar' && translatedWords.length === 2) {
    return `${translatedWords[1]} ${translatedWords[0]}`;
  }

  return translatedWords.join(' ');
}
  

categoryMap: Record<string, string> = {
  "womens_fashion": "fashionwomen",
  "mens_fashion": "fashionmen",
};

getCategoryKey(name: string): string {
  if (!name) return 'bestSelling.all';

  const normalized = this.normalizeCategory(name);

  const mappedKey = this.categoryMap[normalized];

  return `bestSelling.${mappedKey || normalized}`;
}

private normalizeCategory(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')         // remove quotes
    .replace(/-/g, ' ')           // treat dash as space
    .replace(/\s*&\s*/g, ' ')     // & → space
    .replace(/\s+/g, '_')         // spaces → _
    .replace(/_+/g, '_')          // no multiple _
    .replace(/^_|_$/g, '');       // clean edges
}

getCategoryTranslateKey(name: string): string {
  if (!name) return 'bestSelling.all';

  const normalized = name
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/\s+/g, '_');

  const map: Record<string, string> = {
    "womens_fashion": "fashionwomen",
    "mens_fashion": "fashionmen",
  };

  return 'bestSelling.' + (map[normalized] || normalized);
}


formatPrice(price: number): string {
  return price.toLocaleString(
    this.currentLang === 'ar' ? 'ar-EG' : 'en-US',
    {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0
    }
  );
}
}
