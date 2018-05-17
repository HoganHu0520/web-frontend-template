import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatOptionModule,
    MatSelectModule, MatChipsModule, MatIconModule, MatButtonModule, MatSidenavModule,
    MatToolbarModule,
} from '@angular/material';

import { ModalModule } from 'ngx-bootstrap';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarNavComponent } from './layout/sidebar-nav.component';

const MaterialModules = [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
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
