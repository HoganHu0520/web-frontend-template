import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ProfileComponent,
                children: [
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule { }
