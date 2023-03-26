import { TranslocoService } from '@ngneat/transloco';

export function preloadTranslations(transloco: TranslocoService) {
  return function () {
    transloco.setActiveLang('en-GB');
    return transloco.load('en-GB').subscribe();
  };
}
