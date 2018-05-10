import { Component, ViewContainerRef, ViewEncapsulation, Injector } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: [
        './profile.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {

    private viewContainerRef: ViewContainerRef;

    versionText: string;

    config: SwiperConfigInterface;

    index: number;

    public constructor(
        injector: Injector,
    ) {
        this.config = {
            direction: 'vertical'
        };
    }
}
