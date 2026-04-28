import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { BrandsService } from './Services/brands.service';
import { FormsModule } from '@angular/forms';
import { IBrands } from '../../core/interfaces/brands.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-brands',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent implements OnInit{
  private readonly brandsService = inject(BrandsService);


  allBrands:WritableSignal<IBrands[]> = signal([]);

  ngOnInit(): void {
   this.GetAllBrandsData()
  }

  GetAllBrandsData():void{
    this.brandsService.GetAllBrands().subscribe({
      next:(res)=>{
        this.allBrands.set(res.data);
      }
    })
  }
  
}
