import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './layout/login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule,

    LoginComponent
  ],
  declarations: [LoginComponent]
})
export class CoreModule { }
