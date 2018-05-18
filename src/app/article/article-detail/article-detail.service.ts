import { Injectable } from '@angular/core';

import { Client, ArticleModel } from '@shared/service-proxies/service-proxies';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ArticleDetailService {

    article: ArticleModel;

    constructor(
        private _client: Client,
        private _activateRoute: ActivatedRoute
    ) {
        this.clear();
    }

    getArticle(finallyCallback?: () => void): void {
        finallyCallback = finallyCallback || (() => { });
        let id = this._activateRoute.snapshot.paramMap.get('id');
        // Important
        this._client.article(parseInt(id))
            .finally(() => {
                finallyCallback;
            })
            .subscribe((result: ArticleModel) => {
                this.article = result;
            });
    }

    private clear(): void {
        this.article = new ArticleModel();
    }
}
