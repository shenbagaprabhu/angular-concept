import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeparmentDetailComponent } from './deparment-detail/deparment-detail.component';
import { DepartmentStaffComponent } from './department-staff/department-staff.component';
import { DepartmentStudentComponent } from './department-student/department-student.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  {path:"",redirectTo:"department", pathMatch:"full"},
  {path:"department", component:DepartmentComponent},
  {
   path:"department/:id",
   component:DeparmentDetailComponent,
   children:[
    {path:"staff",component:DepartmentStaffComponent},
    {path:"student", component:DepartmentStudentComponent}
   ]
  },
  {path:"employee", component:EmployeeListComponent},
  {path:"**", component:EmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentComponent, EmployeeListComponent, EmptyComponent, DeparmentDetailComponent];
