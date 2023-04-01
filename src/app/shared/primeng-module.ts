import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
/**
 * NgModule that includes all primeNG modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [ButtonModule, CarouselModule, ImageModule, DialogModule],
})
export class PrimeNgModules {}
