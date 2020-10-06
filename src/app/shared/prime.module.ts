import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  imports: [
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    MenubarModule,
    TooltipModule
  ]
})
export class PrimeModule { }
