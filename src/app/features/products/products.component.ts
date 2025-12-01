import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../core/interfaces/Iproduct.interface';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
allProducts:IProduct[] = [];
  private readonly  productsService = inject(ProductsService);

ngOnInit(): void {
  this.getAllProductsData();
}

getAllProductsData(): void{
  this.productsService.getAllProducts().subscribe({
    next: (res) => {
      this.allProducts = res.data;

      console.log(this.allProducts);
      
    },
    error: (err) => {
      console.log(err);
    }
  });
}
}
