import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './page/home/home.component';
import { PublicRoutingModule } from './public.routing';

@NgModule({
  imports: [PublicRoutingModule, SharedModule, CommonModule],
  declarations: [HomeComponent],
  exports: [],
  providers: [],
})
export class publicModule {}
