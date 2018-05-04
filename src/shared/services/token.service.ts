import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

const TOKEN_KEY = 'token';
const TOKEN_TYPE = 'token-type';

@Injectable()
export class TokenService {

  constructor(private _cookieService: CookieService) { }

  getToken(): string {
    return this._cookieService.get(TOKEN_KEY);
  }

  setToken(authToken: string, expireDate?: Date): void {
    this._cookieService.put(TOKEN_KEY, authToken, { expires: expireDate });
  }

  clearToken(): void {
    this._cookieService.remove(TOKEN_KEY);
    this._cookieService.remove(TOKEN_TYPE);
  }

  getTokenCookieName(): string {
    return TOKEN_KEY;
  }

  getTokenType(): string {
    return this._cookieService.get(TOKEN_TYPE);
  }

  setTokenType(tokenType: string): void {
    this._cookieService.put(TOKEN_TYPE, tokenType);
  }

  getTokenTypeName(): string {
    return TOKEN_TYPE;
  }

}

export function tokenServiceFactory(cookieService: CookieService): TokenService {
  return new TokenService(cookieService);
}
