import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ArticlesComponent,
                children: [
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ArticleRoutingModule { }
