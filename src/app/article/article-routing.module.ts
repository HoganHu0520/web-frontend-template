import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from '@app/article/article-detail/article-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ArticlesComponent,
                children: [
                ]
            },
            {
                path: ':id',
                component: ArticleDetailComponent,
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ArticleRoutingModule { }
