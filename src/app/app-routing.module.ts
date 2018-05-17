import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    {
                        path: 'article',
                        loadChildren: './article/article.module#ArticleModule',
                    }
                ],
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
