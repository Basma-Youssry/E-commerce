import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoriesBestSallerService } from '../../services/categories-best-saller.service';
import { Icategory } from '../../interfaces/icategory.interface';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CategoryFilterComponent } from "../../../../shared/components/category-filter/category-filter.component";


@Component({
  selector: 'app-best-selling',
  imports: [CardComponent, TranslatePipe, CategoryFilterComponent],
  templateUrl: './best-selling.component.html',
  styleUrl: './best-selling.component.css'
})
export class BestSellingComponent implements OnInit {

  //Zone.js
  // categoriesList: Icategory[] = [];
  categoriesList: WritableSignal<Icategory[]> = signal([]);
  categoryName: WritableSignal<string> = signal('');
  activeCategory: WritableSignal<string> = signal('all');

  private readonly categoriesBestSallerService = inject(CategoriesBestSallerService);
  private readonly translateService = inject(TranslateService);


  currentLang = this.translateService.currentLang;


 
  ngOnInit(): void {
    this.getAllCategoriesData();

    this.translateService.onLangChange.subscribe((lang) => {
      this.currentLang = lang.lang;
  });
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


  // selectCategory(category:Icategory):void{
  //   this.categoryName.set(category.name);

  //   this.activeCategory.set(category.name);
  //   // console.log(category.name);
  // }

  // allbtn():void{
  //     // this.all = true;
  //     this.categoryName.set('');

  //     this.activeCategory.set('all');
  // }

  handleCategoryChange(name: string) {
    if (name === 'all') {
      this.categoryName.set('');
      this.activeCategory.set('all');
    } else {
      this.categoryName.set(name);
      this.activeCategory.set(name);
    }
  }


  translateCategoryName(name: string): string {
  const words = name.split(' ');

  const translatedWords = words.map(word => {
    const key = `category.${word.toLowerCase()}`;
    const translated = this.translateService.instant(key);
    return translated === key ? word : translated;
  });

  if (this.translateService.currentLang === 'ar' && translatedWords.length === 2) {
    return `${translatedWords[1]} ${translatedWords[0]}`;
  }

  return translatedWords.join(' ');
}

translatedCategoriesList() {
  return this.categoriesList().slice(0, 3).map(cat => ({
    ...cat,
    translatedName: this.translateCategoryName(cat.name) // 👈 بدل name
  }));
}



}
