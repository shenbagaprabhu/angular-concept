import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-staff',
  template: `
    <p>
      add-staff works!
    </p>
    Name: <input #nameRef type="text" [(ngModel)]="staffName" /> 
    Department: <input type="text" [(ngModel)]="_departmentName" />  
  `,
  styles: [
  ]
})
export class AddStaffComponent implements OnInit, AfterViewInit {

  private _name:string="";
  public _departmentName:string="";
  @ViewChild('nameRef') nameTempRef:ElementRef | any;
  constructor() { }

  get staffName():string{
    return this._name;
  }

  set staffName(name){
    this._name=name;
    if(this._name === "prabhu"){
      alert("Welcome")
    }
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.nameTempRef.nativeElement.focus();
  }

  public submit(){
    alert(`Created Staff ${this._name} in departmet ${this._departmentName}`);
  }

}
