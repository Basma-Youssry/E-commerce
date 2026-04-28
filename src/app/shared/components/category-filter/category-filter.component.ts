import { Component, computed, inject, input, InputSignal, output, signal, OnInit } from '@angular/core';
import { Icategory } from '../../../features/home/interfaces/icategory.interface';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite/lib/esm/components';

@Component({
  selector: 'app-category-filter',
  imports: [TranslatePipe],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css',
})
export class CategoryFilterComponent {

  private readonly translateService = inject(TranslateService);

  constructor(private flowbiteService: FlowbiteService) {

    this.translateService.addLangs(['en', 'ar']);
    this.translateService.setDefaultLang('en');

    const lang = localStorage.getItem('lang') || 'en';

    this.translateService.use(lang === 'ar' ? 'ar' : 'en');
    this.translateService.onLangChange.subscribe(event => {
      localStorage.setItem('lang', event.lang);
    });

  }


  screenWidth = signal(window.innerWidth);

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });



    window.addEventListener('resize', () => {
      this.screenWidth.set(window.innerWidth);
    });

  }


  //   visibleCategories = computed(() => {
  //   const categories = this.categoriesList();

  //   if (this.isLargeScreen()) {
  //     return categories; // lg and above → all
  //   }

  //   return categories.slice(0, 5); // sm & md → first 5
  // });
  categoriesList: InputSignal<Icategory[]> = input<Icategory[]>([]);
  categorySelected = output<string>();
  activeCategory: InputSignal<string> = input<string>('all');
  isLargeScreen = signal<boolean>(window.innerWidth >= 1024);



  selectCategory(category: Icategory): void {
    this.categorySelected.emit(category.name);
  }

  allbtn(): void {
    this.categorySelected.emit('all');
  }


  visibleCategories = computed(() => {
    const categories = this.categoriesList();
    const width = this.screenWidth();

    if (width >= 1200) {
      return categories; // lg and above
    }

    if (width >= 768) {
      return categories.slice(0, 5); // md
    }

    return categories.slice(0, 3); // small
  });

  // translatedCategories = computed(() => {
  //   const map: Record<string, string> = {
  //     'fashionwomen': 'bestSelling.fashionwomen',
  //     'fashionmen': 'bestSelling.fashionmen',
  //     'music': 'bestSelling.music'
  //   };

  //   return this.visibleCategories().map(cat => ({
  //     ...cat,
  //     translatedName: `bestSelling.${cat.name}`
  //   }));
  // });

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
    .replace(/['"]/g, '')
    .replace(/-/g, ' ')
    .replace(/\s*&\s*/g, ' ')
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}
  translatedCategories = computed(() => {
  return this.visibleCategories().map(cat => {
    return {
      ...cat,
      translatedName: this.getCategoryKey(cat.name)
    };
  });
});

}
