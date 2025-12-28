import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../core/interfaces/Iproduct.interface';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CardComponent, NgxPaginationModule, SearchPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
allProducts:IProduct[] = [];
pageSize!:number;
p!:number;
total!:number;
//For search pipe
item:string = "";

  private readonly  productsService = inject(ProductsService);

ngOnInit(): void {
  this.getAllProductsData();
}

getAllProductsData(pageNumber:number = 1): void{
  this.productsService.getAllProducts(pageNumber).subscribe({
    next: (res) => {
      this.allProducts = res.data;

      this.pageSize = res.metadata.limit;
      this.p = res.metadata.currentPage;
      this.total = res.results;
      // console.log(this.allProducts);
      
    },
    error: (err) => {
      console.log(err);
    }
  });
}
}
