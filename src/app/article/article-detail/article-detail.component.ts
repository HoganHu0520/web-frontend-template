import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ArticleDetailService } from './article-detail.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: [
    './article-detail.component.scss', 
  ],
  providers: [ArticleDetailService],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ArticleDetailComponent implements OnInit {

  constructor(public articleDetailService: ArticleDetailService) { }

  ngOnInit() {
    this.articleDetailService.getArticle();
  }

}
