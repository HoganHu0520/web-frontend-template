import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { UsersServiceProxy, LoginRequestModel, TokenResponse } from '@shared/service-proxies/service-proxies';
import { UrlHelper } from '@shared/helpers/UrlHelper';
import { AppConsts } from '@shared/AppConsts';

import { TokenService } from '@shared/services/token.service';

import * as _ from 'lodash';

@Injectable()
export class LoginService {

    loginRequestModel: LoginRequestModel;
    tokenResponse: TokenResponse;
    rememberMe: boolean;

    constructor(
        private _userServiceProxy: UsersServiceProxy,
        private _router: Router,
        private _tokenService: TokenService,
        private _cookieService: CookieService,
    ) {
        this.clear();
    }

    login(finallyCallback?: () => void): void {
        finallyCallback = finallyCallback || (() => { });

        // Important
        this.loginRequestModel.isLoginAdmin = true;

        this._userServiceProxy
            .login(this.loginRequestModel)
            .finally(() => {
                finallyCallback;
            })
            .subscribe((result: TokenResponse) => {
                this.processloginResult(result);
            });
    }


    private processloginResult(tokenResponse: TokenResponse) {
        this.tokenResponse = tokenResponse;

        if (tokenResponse.accessToken) {
            //Successfully logged in
            this.afterLogin(tokenResponse.accessToken, tokenResponse.accessToken, tokenResponse.expiresIn, this.rememberMe);
            this._router.navigate(['app']);
        } else {
            //Unexpected result!

            this._router.navigate(['account/login']);
        }
    }

    private afterLogin(accessToken: string, encryptedAccessToken: string, expireInSeconds: number, rememberMe?: boolean): void {

        var tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * expireInSeconds)) : undefined;

        this._tokenService.setToken(
            accessToken,
            tokenExpireDate
        );

        this._cookieService.put(
            AppConsts.authorization.encrptedAuthTokenName,
            encryptedAccessToken,
            {
                expires: tokenExpireDate,
            }
        );

        var initialUrl = UrlHelper.initialUrl;
        if (initialUrl.indexOf('/login') > 0) {
            initialUrl = AppConsts.appBaseUrl;
        }

        location.href = initialUrl;
    }

    private clear(): void {
        this.loginRequestModel = new LoginRequestModel();
        this.tokenResponse = null;
        this.rememberMe = false;
    }
}
