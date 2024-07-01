import { createApplication } from '@angular/platform-browser';
import { appConfig } from './main.config';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { ApplicationRef } from '@angular/core';

(async () => {
  const app: ApplicationRef = await createApplication(appConfig);

  const webComponent = createCustomElement(AppComponent, {
    injector: app.injector,
  });
  customElements.define('first-microapp', webComponent);
})();
