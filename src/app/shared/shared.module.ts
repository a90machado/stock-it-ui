import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from './prime.module';
import { BaseModule } from './base.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    PrimeModule,
    BaseModule,

    FontAwesomeModule
  ],
  exports: [
    PrimeModule,
    BaseModule,

    FontAwesomeModule
  ],
  declarations: []
})
export class SharedModule { }
