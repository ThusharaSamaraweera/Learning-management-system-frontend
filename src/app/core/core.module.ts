import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from './services/transloco-root.module';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const EXPORT_MODULES = [
  TranslocoRootModule,
  TranslocoLocaleModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule],
  exports: EXPORT_MODULES,
  providers: [],
})
export class CoreModule {}
