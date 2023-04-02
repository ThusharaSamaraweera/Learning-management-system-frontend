import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './page/dashboard/home.component';
import { HomeRoutingModule } from './home.routing';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, CommonModule],
  declarations: [HomeComponent, SignInComponent],
  exports: [],
  providers: [],
})
export class HomeModule {}
