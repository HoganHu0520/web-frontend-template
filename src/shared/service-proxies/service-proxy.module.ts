import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Client } from './service-proxies';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        HttpClient,
        Client,
    ],
    exports: [
    ]
})
export class ServiceProxyModule { }
