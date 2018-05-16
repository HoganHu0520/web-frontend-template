﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule', //Lazy load account module
        data: { preload: true }
    },
    {
        path: 'app',
        loadChildren: './app/app.module#AppModule', //Lazy load account module
        data: { preload: true }
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule { }
