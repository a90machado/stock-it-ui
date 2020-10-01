import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule
  ]
})
export class PrimeModule { }
