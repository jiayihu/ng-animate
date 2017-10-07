/**
 * @NOTE: this file is not used yet because AOT it's not supported
 */
import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

if (process.env.NODE_ENV === 'production') {
  console.log('production mode');
  enableProdMode();
}

const platform = platformBrowser();
platform.bootstrapModule(AppModule);
