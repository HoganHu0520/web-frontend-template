import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-diff.js';
import 'prismjs/components/prism-bash.js';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const MatModules = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MatModules,
    MarkdownModule.forRoot(),
    ArticleRoutingModule,
  ],
  declarations: [ArticlesComponent, ArticleDetailComponent]
})
export class ArticleModule { }
