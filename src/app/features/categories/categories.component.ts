import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Icategory } from '../home/interfaces/icategory.interface';
import { CategoryFilterComponent } from "../../shared/components/category-filter/category-filter.component";
import { CardComponent } from "../../shared/components/card/card.component";
import { CategoriesBestSallerService } from '../home/services/categories-best-saller.service';
import { FlowbiteService } from '../../core/services/flowbite.service';

@Component({
  selector: 'app-categories',
  imports: [TranslatePipe, CategoryFilterComponent, CardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent  implements OnInit{
    constructor(private flowbiteService: FlowbiteService) {}

 
  categoriesList: WritableSignal<Icategory[]> = signal([]);
  categoryName: WritableSignal<string> = signal('');
  activeCategory:WritableSignal<string> = signal('all');

  //step1: price filter in accordion 
  selectedPriceRange: WritableSignal<{ min: number; max: number } | null> = signal(null);


  private readonly categoriesBestSallerService = inject(CategoriesBestSallerService);

  ngOnInit(): void {
    this.getAllCategoriesData();
  }
 getAllCategoriesData(): void {
    this.categoriesBestSallerService.getAllCategories().subscribe({
      next: (res) => {
        // console.log(res.data);
        // this.categoriesList = res.data;

        //*************Note1:Entered different price to API category[] to every object inside it.
        const staticPrices = [1200, 1500, 1800, 2100, 2500, 3000];

        // assign a different price to each category

        this.categoriesList.set(res.data.map((cat: any, index: any) => ({
          ...cat,
          price: staticPrices[index % staticPrices.length]
        }))
        )
      }
      // Handling Errors inside Interceptor
    })
  }

  handleCategoryChange(name: string) {
    if (name === 'all') {
      this.categoryName.set('');
      this.activeCategory.set('all');
    } else {
      this.categoryName.set(name);
      this.activeCategory.set(name);
    }
  }

  // priceRange():void{
  //   for(let i = 0 ; this.categoriesList().length; i++){
  //     if(this.categoriesList().price){

  //     }
  //   }
  // }

  //step2: price filter in accordion
  filteredCategories = computed(() => {
  const categories = this.categoriesList();
  const activeCategory = this.activeCategory();
  const range = this.selectedPriceRange();

  return categories.filter(cat => {

    // Filter by category
    const matchCategory =
      activeCategory === 'all' || cat.name === activeCategory;

    // Filter by price
    const matchPrice =
      !range || (cat.price >= range.min && cat.price <= range.max);

    return matchCategory && matchPrice;
  });
});

//step3: price filter in accordion
selectPriceRange(min: number, max: number) {
  this.selectedPriceRange.set({ min, max });
}
//step4: price filter in accordion
clearPriceFilter() {
  this.selectedPriceRange.set(null);
}


}
