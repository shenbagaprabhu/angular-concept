import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../test/Test';
import { TestService } from '../test/test-service.service';

@Component({
  selector: 'app-department',
  template: `
            <h3>Department List </h3>
            <ul *ngFor="let employee of employeeList">
               <a><li (click)="onClick(employee)" [class.activateColor] = "getClass(employee)" >{{employee.name}}</li></a>
            </ul>`,
  styles: [`.activateColor{
color:red;
  }`]
})
export class DepartmentComponent implements OnInit {

  public employeeList: Employee[]=[];
  public activatedId: number = 0;
  public activateColor = "activateColor";

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private employeeService: TestService) {
    employeeService.getEmployee().subscribe(data=> this.employeeList=data);
   }

  ngOnInit(): void {
    //taking from param map
    // this.activatedRoute.paramMap.subscribe(params => {
    //   this.activatedId = parseInt(params.get('id') || '');
    // })

    //query params 
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
         this.activatedId = parseInt(params['id']);
    })
  }

  onClick(employee: Employee) {
   // hardcoding the route path
    this.route.navigate(["/department", employee.id])

    //using relative
    //this.route.navigate([employee.id], {relativeTo:this.activatedRoute})
  }

  getClass(employee: Employee) {
    return employee.id === this.activatedId;
  }

}
