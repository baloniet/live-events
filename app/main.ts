import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { getTranslationProviders } from './i18n-providers';

import { AppModule } from './app.module';

getTranslationProviders().then(providers => {

  const options = { providers };
  
  // wait for translation then bootstrap
  platformBrowserDynamic().bootstrapModule(AppModule, options);

});
