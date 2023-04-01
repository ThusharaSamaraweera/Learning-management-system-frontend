import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './page/dashboard/home.component';
import { HomeRoutingModule } from './home.routing';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, CommonModule],
  declarations: [HomeComponent, SignUpComponent],
  exports: [],
  providers: [],
})
export class HomeModule {}
