import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeList: { name: string; position: string; department: string }[] = [
    { name: 'Lorenz', position: 'Project Manager', department: 'IT' }
  ];

  getEmployees() {
    return this.employeeList;
  }

  addEmployee(employee: { name: string; position: string; department: string }) {
    this.employeeList.push(employee);
  }

  removeEmployee(index: number) {
    this.employeeList.splice(index, 1);
  }

  clearAllEmployees() {
    this.employeeList = [];
  }
}
