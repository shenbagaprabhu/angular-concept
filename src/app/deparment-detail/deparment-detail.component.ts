import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-deparment-detail',
  template: `
    <h3>
      Department Selected = {{departmentId}}!
    </h3>

    <a (click)="goToStaff()">Staff</a>
    <a (click)="goToStudent()">Student</a>

    <router-outlet></router-outlet>
    
    <p>
    <a (click)="next()" > next</a>
    <a (click)="prev()">prev</a>
    <a (click)="back()">back</a>
    </p>
   
    
  `,
  styles: [
  ]
})
export class DeparmentDetailComponent implements OnInit {

  public departmentId: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.route.paramMap.subscribe(data => {
      this.departmentId = parseInt(data.get('id') || '')
    })
  }

  next() {
    let id = this.departmentId + 1;
    this.router.navigate(["department", id])
  }

  prev() {
    let id = this.departmentId - 1;
    this.router.navigate(["department", id])
  }

  back() {
    let id = this.departmentId;
    // this.router.navigate(["department", {id:id}]);

    this.router.navigate(["department"], { queryParams: { id: id } });

  }

  goToStaff(){
    this.router.navigate(["staff"], { relativeTo: this.route  });
  }

  goToStudent(){
    this.router.navigate(["student"], { relativeTo: this.route });
  }

}
