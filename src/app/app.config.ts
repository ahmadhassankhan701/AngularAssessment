import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    MessageService,
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
