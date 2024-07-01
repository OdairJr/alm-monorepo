import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withPreloading,
  PreloadAllModules,
  withDebugTracing,
} from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    ),
  ],
};
