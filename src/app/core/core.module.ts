import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './layout/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule,

    LoginComponent,
    HeaderComponent,
    SidenavComponent
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
