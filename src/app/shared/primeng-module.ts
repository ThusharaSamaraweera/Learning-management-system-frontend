import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

/**
 * NgModule that includes all primeNG modules that are required to serve the demo-app.
 */
@NgModule({
  imports: [InputTextModule],
  exports: [ButtonModule, CarouselModule, ImageModule, DialogModule, InputTextModule],
})
export class PrimeNgModules {}
