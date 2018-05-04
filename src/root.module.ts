import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';

import { RootRoutingModule } from './root-routing.module';

import { AppConsts } from '@shared/AppConsts';
import { API_BASE_URL } from '@shared/service-proxies/service-proxies';

import { RootComponent } from './root.component';
import { AppPreBootstrap } from './AppPreBootstrap';
import { ModalModule } from 'ngx-bootstrap';

export function appInitializerFactory(injector: Injector) {
  return () => {
    return new Promise<boolean>((resolve, reject) => {
      AppPreBootstrap.run(() => {
        resolve(true);
      });
    });
  }
}

export function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    RootRoutingModule
  ],
  declarations: [
    RootComponent
  ],
  providers: [
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [Injector],
      multi: true
    },
  ],
  bootstrap: [RootComponent]
})
export class RootModule {

}
