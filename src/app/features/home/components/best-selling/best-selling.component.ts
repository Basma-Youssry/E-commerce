import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CategoriesBestSallerService } from '../../services/categories-best-saller.service';
import { Icategory } from '../../interfaces/icategory.interface';
import { CardComponent } from '../../../../shared/components/card/card.component';


@Component({
  selector: 'app-best-selling',
  imports: [CardComponent],
  templateUrl: './best-selling.component.html',
  styleUrl: './best-selling.component.css'
})
export class BestSellingComponent implements OnInit {

  categoriesList: Icategory[] = [];
  categoryName:string = ' ';
  // all:boolean = false;

  private readonly categoriesBestSallerService = inject(CategoriesBestSallerService);

  ngOnInit(): void {
    this.getAllCategoriesData();
  }


  getAllCategoriesData(): void {
    this.categoriesBestSallerService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res.data);
        // this.categoriesList = res.data;

        //*************Note1:Entered different price to API category[] to every object inside it.
        const staticPrices = [1200, 1500, 1800, 2100, 2500, 3000]; 

        // assign a different price to each category
        this.categoriesList = res.data.map((cat:any, index:any) => ({
          ...cat,
          price: staticPrices[index % staticPrices.length] 
        }));

      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  selectCategory(category:Icategory):void{
    this.categoryName = category.name;
    console.log(category.name);
  }

  allbtn():void{
      // this.all = true;
      this.categoryName = ' '
  }
}
