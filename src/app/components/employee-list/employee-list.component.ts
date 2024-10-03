import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})

export class EmployeeListComponent {
  name: string = '';
  position: string = '';
  department: string = '';

  employeeList: { name: string; position: string; department: string }[] = [];

  constructor() {
    this.employeeList.push({
      name: 'Lorenz',
      position: 'Project Manager',
      department: 'IT'

    });
  }

  addEmployee() {
    if (this.name.trim() && this.position.trim() && this.department.trim()) {
      const newEmployee = {
        name: this.name.trim(),
        position: this.position.trim(),
        department: this.department.trim()
      };

      this.employeeList.push(newEmployee);

      this.name = '';
      this.position = '';
      this.department = '';
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeEmployee(index: number) {
    this.employeeList.splice(index, 1);
  }
}
