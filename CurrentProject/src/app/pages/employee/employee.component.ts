import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any;

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(formValue: any) {
    this.employees.push(formValue);
  }
}
