import * as moment from 'moment';
import { AppConsts } from '@shared/AppConsts';
import * as HttpClientInjector from '@shared/utils/HttpClientInjector';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Type, CompilerOptions, NgModuleRef, ReflectiveInjector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const http: HttpClient = HttpClientInjector.getHttpClient();

export class AppPreBootstrap {

  static run(callback: () => void): void {
    AppPreBootstrap.getApplicationConfig(() => {
      callback();
    });
  }

  static bootstrap<TM>(moduleType: Type<TM>, compilerOptions?: CompilerOptions | CompilerOptions[]): Promise<NgModuleRef<TM>> {
    return platformBrowserDynamic().bootstrapModule(moduleType, compilerOptions);
  }

  private static getApplicationConfig(callback: () => void) {
    http.get('/assets/appconfig.json').subscribe((data: any) => {
      AppConsts.appBaseUrl = data.appBaseUrl;
      AppConsts.remoteServiceBaseUrl = data.remoteServiceBaseUrl;

      callback();
    });

    let options : any = {
      headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json"
      }),
    };
  }

}
