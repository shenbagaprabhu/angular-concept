import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from './Test';
import { TestService } from './test-service.service';

@Component({
  selector: 'app-test',
  template: `<div>
              <input #changeValue [disabled]="disableTextBox" type="text" value="prabhu"/>
              <h2> Parent Title -  {{parentTitle}} {{parentTitle2}}</h2>
              <div bind-class="textConfirm" > Hello {{component}}</div>
              <div [class.text-error]="disableTextBox" > Hello {{component}}</div>
              <div [ngClass]="classObj" > Hello {{component}}</div>
              <div> "Entered Name" {{enteredName}} </div>
              <button (click)="onclick(changeValue)">click</button>
              {{changeValue.value}}
              <input  [(ngModel)]="userName" type="text" value="prabhu"/>
              {{userName}}

              <ul *ngFor="let employee of employees">
                <li>{{employee.name}}</li>
              </ul>
            </div>`,
  styles: [`
    .text-success {
      color:green; 
    }
    .text-error {
      font-family:italic
    }
    div{
      font-size:20px
    }
  `]
})
export class TestComponent implements OnInit {
  @Input() parentTitle:any;
  @Input() parentTitle2:any;
  @Output() childEvent = new EventEmitter();
  component = "child component";
  public textConfirm = "text-error";
  disableTextBox = false;
  public enteredName = ""
  public userName ="";
  classObj = {
    "text-success":true,
    "text-error" : false
  }
  public employees:Employee[] = [];
  constructor(testService:TestService) { 
      testService.getEmployee().subscribe(data=>this.employees=data);
  }

  ngOnInit(): void {
  }
  setName(event:any){
    console.log(event);
    this.enteredName=event.target.value;
  }

  onclick(event:any){
    console.log(event.value);
    this.childEvent.emit("Welcome")
  }

}
