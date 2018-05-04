import { Component, ViewContainerRef, Injector, ViewEncapsulation } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {

  private viewContainerRef: ViewContainerRef;

  constructor(
    injector: Injector
  ) {
  }
}
