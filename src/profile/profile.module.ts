import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        SwiperModule,
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ],
    declarations: [
        ProfileComponent,
    ]
})
export class ProfileModule {

}
