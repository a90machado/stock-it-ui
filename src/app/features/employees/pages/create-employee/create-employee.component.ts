import { Component, OnInit } from '@angular/core';
import { TitleWithIcon } from 'src/app/shared';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent {

  public titleWithIcon: TitleWithIcon = { title: 'Add a new Employee', icon: faUserPlus };

  public employeeStartDate: Date;

  public employeeFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))]),
    lastName: new FormControl("",[Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))]),
    employeeNumber: new FormControl("",[Validators.required, Validators.pattern(new RegExp("^[a-zA-Z0-9]+$"))]),
    role: new FormControl("",[Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))]),
    startDate: new FormControl(new Date(),[Validators.required]),
    market: new FormControl("", [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))])
  });

  constructor(private router: Router,
              private employeeService: EmployeeService) { }

  public createNewEmployee(): void {
    this.markAllFormsAsTouched();
    if (this.employeeFormGroup.valid) {
      const newEmployee = {
        firstName: this.employeeFormGroup.get('firstName').value,
        lastName: this.employeeFormGroup.get('lastName').value,
        employeeNumber: this.employeeFormGroup.get('employeeNumber').value,
        role: this.employeeFormGroup.get('role').value,
        startDate: this.employeeFormGroup.get('startDate').value,
        market: this.employeeFormGroup.get('market').value
      }
      this.employeeService.createNewEmployee(newEmployee, false).subscribe( () => this.router.navigate(['employees']) );
    }
  }

  private markAllFormsAsTouched(): void {
    this.employeeFormGroup.get('firstName').markAsTouched();
    this.employeeFormGroup.get('lastName').markAsTouched();
    this.employeeFormGroup.get('employeeNumber').markAsTouched();
    this.employeeFormGroup.get('role').markAsTouched();
    this.employeeFormGroup.get('startDate').markAsTouched();
    this.employeeFormGroup.get('market').markAsTouched();
  }

  public goBackToEmployees(): void {
    this.router.navigate(['employees']);
  }

}
