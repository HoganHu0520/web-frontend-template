import { Component, ViewContainerRef, ViewEncapsulation, Injector } from '@angular/core';
import { TokenService } from '@shared/services/token.service';

@Component({
    templateUrl: './account.component.html',
    styleUrls: [
        './account.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AccountComponent {

    private viewContainerRef: ViewContainerRef;

    versionText: string;
    currentYear: number;

    public constructor(
        injector: Injector,
        _tokenService: TokenService
    ) {

        this.currentYear = new Date().getFullYear();
    }
}
