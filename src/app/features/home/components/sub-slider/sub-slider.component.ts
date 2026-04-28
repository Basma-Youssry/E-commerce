import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, AfterViewInit } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation]);
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Swiper from 'swiper';

import { SwiperOptions } from 'swiper/types';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sub-slider',
  imports: [CarouselModule, TranslatePipe],
  templateUrl: './sub-slider.component.html',
  styleUrl: './sub-slider.component.css'
})
export class SubSliderComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 5,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: -40,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: -40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: -55,
        },
      },
    });
  }

}




