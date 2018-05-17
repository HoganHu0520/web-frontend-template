import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleRoutingModule } from './article-routing.module';

const MatModules = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MatModules,
    ArticleRoutingModule,
  ],
  declarations: [ArticlesComponent]
})
export class ArticleModule { }
