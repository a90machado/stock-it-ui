import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

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
    ButtonModule,
    MenubarModule
  ]
})
export class PrimeModule { }
