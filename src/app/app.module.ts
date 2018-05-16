import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatOptionModule,
    MatSelectModule, MatChipsModule, MatIconModule, MatButtonModule
} from '@angular/material';

import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarNavComponent } from './layout/sidebar-nav.component';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';

const MaterialModules = [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
];

@NgModule({
    declarations: [
        AppComponent,
        SideBarNavComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        AppRoutingModule,
        ServiceProxyModule,
        ...MaterialModules,
    ],
    providers: [

    ]
})
export class AppModule { }
