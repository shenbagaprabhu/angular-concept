import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-student',
  template: `
    <p>
      department-student works!
    </p>
    StudentName: <input type="text" [(ngModel)]="student.name" />
    DepartmentName : <input type="text" [(ngModel)]="student.department" />
    <button (click)="submit()">submit</button>
  `,
  styles: [
  ]
})
export class DepartmentStudentComponent implements OnInit {

  student:Student = {name:"prabhu", department:"" };
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log("Submit")
    alert(`Student ${this.student.name} created in department ${this.student.department}`)
  }
}

export interface Student {
   name:string,
   department:string
}