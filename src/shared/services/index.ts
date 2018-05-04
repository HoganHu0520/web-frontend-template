import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieModule, CookieService } from 'ngx-cookie';

import { TokenService, tokenServiceFactory } from './token.service';

@NgModule({
    imports: [
        CookieModule.forRoot(),
    ],
    exports: [
        CookieModule,
    ],
})
export class ServiceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServiceModule,
            providers: [
                { provide: TokenService, useFactory: tokenServiceFactory, deps: [CookieService] }
            ]
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: ServiceModule,
            providers: [
                { provide: TokenService, useFactory: tokenServiceFactory, deps: [CookieService] }
            ]
        };
    }
}
