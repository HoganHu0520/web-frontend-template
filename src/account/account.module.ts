import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule } from '@angular/material';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { ServiceModule } from '@shared/services';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';

const modules = [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...modules,
        AccountRoutingModule,
        ServiceProxyModule,
        ServiceModule.forRoot(),
    ],
    providers: [
    ],
    declarations: [
        AccountComponent,
        LoginComponent,
    ]
})
export class AccountModule {

}
