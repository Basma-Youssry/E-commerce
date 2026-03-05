import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../core/interfaces/Iproduct.interface';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [CardComponent, NgxPaginationModule, SearchPipe, FormsModule, TranslatePipe],
templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

//Signals syntax
allProducts:WritableSignal<IProduct[]> = signal([]);
pageSize:WritableSignal<number> = signal(0);
p:WritableSignal<number> = signal(0);
total:WritableSignal<number> = signal(0);
item:WritableSignal<string> = signal("");
//Zone.js syntax
// pageSize!:number;
// p!:number;
// total!:number;
//For search pipe
// item:string = "";

  private readonly  productsService = inject(ProductsService);
ngOnInit(): void {
  this.getAllProductsData();
}

getAllProductsData(pageNumber:number = 1): void{
  this.productsService.getAllProducts(pageNumber).subscribe({
    next: (res) => {
      this.allProducts.set(res.data);

      this.pageSize.set(res.metadata.limit);
      this.p.set(res.metadata.currentPage);
      this.total.set(res.results);
      // console.log(this.allProducts);
    }
  });
}
}
