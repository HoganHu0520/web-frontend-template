import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [ArticlesService],
})
export class ArticlesComponent implements OnInit {

  openedSidenav: boolean = true;

  constructor(public articleService: ArticlesService) { }

  ngOnInit() {
    this.articleService.getArticles();
  }

  toggleSidenav() {
    this.openedSidenav = !this.openedSidenav;
  }
}
