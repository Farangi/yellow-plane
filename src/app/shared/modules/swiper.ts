import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SwiperPaginationInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_Pagination_CONFIG: SwiperPaginationInterface = {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true,
  hideOnClick: false,
};

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  slidesPerView: 1,
  pagination: DEFAULT_SWIPER_Pagination_CONFIG
};

@NgModule({
  imports: [
  ],
  exports: [
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class SwiperSharedModules { }
