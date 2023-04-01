import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModules } from './primeng-module';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';

@NgModule({
  declarations: [CustomModalComponent],
  imports: [PrimeNgModules, CommonModule],
  exports: [PrimeNgModules, CustomModalComponent],
  providers: [],
})
export class SharedModule {}
