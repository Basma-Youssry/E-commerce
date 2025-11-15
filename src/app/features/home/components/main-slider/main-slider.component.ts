import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FlowbiteService } from '../../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-main-slider',
  imports: [],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css'
})
export class MainSliderComponent {
   constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //   const swiper = new Swiper('.mySwiper', {
  //       modules: [Navigation, Pagination],
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //       loop: true,

  //       navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev',
  //       },

  //       pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true,
  //         dynamicBullets: true,
  //         dynamicMainBullets: 2,
  //       },
  //     });
  //   });
  // }

  
}
