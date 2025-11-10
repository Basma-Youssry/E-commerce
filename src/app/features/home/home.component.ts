import { Component} from '@angular/core';
import { MainSliderComponent } from "./components/main-slider/main-slider.component";
import { NewCollectionComponent } from "./components/new-collection/new-collection.component";
import { BestSellingComponent } from "./components/best-selling/best-selling.component";
import { TopProductsComponent } from "./components/top-products/top-products.component";
import { SubSliderComponent } from "./components/sub-slider/sub-slider.component";

@Component({
  selector: 'app-home',
  imports: [MainSliderComponent, NewCollectionComponent, BestSellingComponent, TopProductsComponent, SubSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
 
  
}
