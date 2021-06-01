import { Component, OnInit } from '@angular/core';
import { Employee, TitleWithIcon } from 'src/app/shared';
import { faUserPlus, faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  public titleWithIcon: TitleWithIcon;
  public employeeFormGroup: FormGroup;
  private isUpdate = false;
  private employeeNumberToUpdate = '';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService) {

  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      if (res && res.employeeNumber) {
        this.titleWithIcon = { title: 'Update Employee information', icon: faPenFancy };
        this.employeeService.getEmployeeByNumber(res.employeeNumber).subscribe(res => {
          this.setFormGroup(res);
          this.isUpdate = true;
          this.employeeNumberToUpdate = res.employeeNumber;
        });
      } else {
        this.titleWithIcon = { title: 'Add a new Employee', icon: faUserPlus };
        this.setFormGroup();
      }
    });
  }

  private setFormGroup(employee?: Employee): void {
    if (employee) {
      this.employeeFormGroup = new FormGroup({
        firstName: new FormControl(employee.firstName, [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))]),
        lastName: new FormControl(employee.lastName, [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))]),
        employeeNumber: new FormControl(employee.employeeNumber, [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z0-9]+$"))]),
        role: new FormControl(employee.role, [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))]),
        startDate: new FormControl(new Date(employee.startDate), [Validators.required]),
        market: new FormControl(employee.market, [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))])
      });
    } else {
      this.employeeFormGroup = new FormGroup({
        firstName: new FormControl("", [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))]),
        lastName: new FormControl("", [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))]),
        employeeNumber: new FormControl("", [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z0-9]+$"))]),
        role: new FormControl("", [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))]),
        startDate: new FormControl(new Date(), [Validators.required]),
        market: new FormControl("", [Validators.required, Validators.pattern(new RegExp("^[a-zA-Z ]+$"))])
      });
    }
  }

  public createNewEmployee(): void {
    this.markAllFormsAsTouched();
    if (this.employeeFormGroup.valid) {
      const employee: Employee = {
        firstName: this.employeeFormGroup.get('firstName').value,
        lastName: this.employeeFormGroup.get('lastName').value,
        employeeNumber: this.employeeFormGroup.get('employeeNumber').value,
        role: this.employeeFormGroup.get('role').value,
        startDate: this.employeeFormGroup.get('startDate').value,
        market: this.employeeFormGroup.get('market').value
      }
      if (this.isUpdate && this.employeeNumberToUpdate.length > 0) {
        employee.oldEmployeeNumber = this.employeeNumberToUpdate;
      }
      this.employeeService.createNewEmployee(employee, this.isUpdate).subscribe((() => {
        this.goBackToEmployees();
      }), (error) => {
        // TODO: Add toast with message.
        console.log(error);
      })
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
    this.employeeFormGroup.reset();
    this.router.navigate(['employees']);
  }

}
