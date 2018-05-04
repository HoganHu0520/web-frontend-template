import { NgModule } from '@angular/core';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.UsersServiceProxy,
        ApiServiceProxies.ProjectManageServiceProxy,
        ApiServiceProxies.QrCodeServiceProxy,
        ApiServiceProxies.PartnerServiceProxy,
        ApiServiceProxies.DefectCategoryServiceProxy,
        ApiServiceProxies.HelpdeskServiceProxy,
    ]
})
export class ServiceProxyModule { }
