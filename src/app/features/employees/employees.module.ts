import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ],
  declarations: [EmployeesComponent]
})
export class EmployeesModule { }
