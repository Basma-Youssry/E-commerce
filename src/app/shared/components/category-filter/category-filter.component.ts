import { Component, computed, input, InputSignal, output, signal } from '@angular/core';
import { Icategory } from '../../../features/home/interfaces/icategory.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite/lib/esm/components';

@Component({
  selector: 'app-category-filter',
  imports: [TranslatePipe],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css',
})
export class CategoryFilterComponent {
  
  constructor(private flowbiteService: FlowbiteService) {}


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
}
