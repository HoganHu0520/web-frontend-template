import * as moment from 'moment';
import { AppConsts } from '@shared/AppConsts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Type, CompilerOptions, NgModuleRef, ReflectiveInjector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    fetch('/assets/appconfig.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
