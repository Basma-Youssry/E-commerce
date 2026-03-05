import { register } from 'swiper/element/bundle';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import localeAr from '@angular/common/locales/ar';
import { registerLocaleData } from '@angular/common';

register();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

registerLocaleData(localeAr);

