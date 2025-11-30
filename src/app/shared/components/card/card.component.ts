import { Component, Input, input } from '@angular/core';
import { IProduct } from '../../../core/interfaces/Iproduct.interface';
import { Icategory } from '../../../features/home/interfaces/icategory.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product?:IProduct;
  @Input() category?:Icategory;
  @Input() categoryName?:string = ' ';
  @Input() activeCategory?:string = ' ';
 
  
}
