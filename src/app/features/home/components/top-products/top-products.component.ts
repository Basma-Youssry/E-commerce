import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../../../core/interfaces/Iproduct.interface';
import { ProductsService } from '../../../../core/services/products/products.service';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-top-products',
  imports: [CardComponent, CommonModule],
  templateUrl: './top-products.component.html',
  styleUrl: './top-products.component.css'
})
export class TopProductsComponent implements OnInit {
allProducts:IProduct[] = [];
  private readonly  productsService= inject(ProductsService);

ngOnInit(): void {
  this.getAllProductsData();
}

getAllProductsData(): void{
  this.productsService.getAllProducts().subscribe({
    next: (res) => {
      this.allProducts = res.data;

      console.log(this.allProducts);
      
    }
    // Handling Errors inside Interceptop
  });
}
}
