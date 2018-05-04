import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const accountModule = './account/account.module#AccountModule';
export const appModule = './app/app.module#AppModule';

const routes: Routes = [
    { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: accountModule, //Lazy load account module
        data: { preload: true }
    },
    {
        path: 'app',
        loadChildren: appModule, //Lazy load account module
        data: { preload: true }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule { }
