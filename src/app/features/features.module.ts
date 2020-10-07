import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { SettingsModule } from './settings/settings.module';
import { SharedModule } from 'primeng/api';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import { FeaturesRoutingModule } from './features-routing.module';



@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    AppRoutingModule,
    FeaturesRoutingModule,
    CommonModule,
    SharedModule,
    CoreModule,
    DashboardModule,
    EmployeesModule,
    ProductsModule,
    SettingsModule
  ],
  exports: [
    FeaturesComponent
  ]
})
export class FeaturesModule { }
