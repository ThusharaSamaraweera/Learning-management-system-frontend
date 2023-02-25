import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModules } from './primeng-module';

@NgModule({
  declarations: [],
  imports: [PrimeNgModules, CommonModule],
  exports: [PrimeNgModules],
  providers: [],
})
export class SharedModule {}
