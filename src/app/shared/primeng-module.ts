import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';

/**
 * NgModule that includes all primeNG modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [ButtonModule],
})
export class PrimeNgModules {}
