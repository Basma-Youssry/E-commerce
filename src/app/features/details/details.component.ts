import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdetailsService } from './services/productdetails.service';
import { IProduct } from '../../core/interfaces/Iproduct.interface';


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
  id:string|null = null;
  productDetails:IProduct = {} as  IProduct;


  ngOnInit(): void {
    this.getProductId();
    this.getProductDetailsData();
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


}
