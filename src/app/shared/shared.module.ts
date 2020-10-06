import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from './prime.module';
import { BaseModule } from './base.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleContentComponent } from './components/title-content/title-content.component';

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

    FontAwesomeModule,

    TitleContentComponent
  ],
  declarations: [TitleContentComponent]
})
export class SharedModule { }
