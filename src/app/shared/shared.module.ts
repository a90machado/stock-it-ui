import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from './prime.module';
import { BaseModule } from './base.module';

@NgModule({
  imports: [
    CommonModule,
    PrimeModule,
    BaseModule
  ],
  exports: [
    PrimeModule,
    BaseModule
  ],
  declarations: []
})
export class SharedModule { }
