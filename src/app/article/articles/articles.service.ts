import { Injectable } from '@angular/core';

import { Client, ArticleModel } from '@shared/service-proxies/service-proxies';

@Injectable()
export class ArticlesService {

    articles: ArticleModel[];

    constructor(
        private _client: Client,
    ) {
        this.clear();
    }

    getArticles(finallyCallback?: () => void): void {
        finallyCallback = finallyCallback || (() => { });

        // Important
        this._client.articleList()
            .finally(() => {
                finallyCallback;
            })
            .subscribe((result: ArticleModel[]) => {
                console.log(result);
                this.articles = result;
            });
    }

    private clear(): void {
        this.articles = [];
    }
}
