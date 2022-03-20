import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddStaffComponent } from '../add-staff/add-staff.component';

@Component({
  selector: 'app-department-staff',
  template: `
    <p [appColorDirective]="color">
      department-staff works!
    </p>
    <app-add-staff #addStaff ></app-add-staff>
    {{addStaff._departmentName}}
    <button (click)="addStaff.submit()"> submit </button>
    <button (click)="color='blue'"> changeColor </button>
    `,
  styles: [
  ]
})
export class DepartmentStaffComponent implements OnInit, AfterViewInit {

  public color = "red"
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.staffRef._name="ravi";
  }
   
  @ViewChild("addStaff") staffRef:AddStaffComponent | any;

}
