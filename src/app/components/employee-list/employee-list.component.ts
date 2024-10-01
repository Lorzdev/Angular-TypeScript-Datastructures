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

  addEmployee() {
    if (this.name.trim() && this.position.trim() && this.department.trim()) {
      const newEmployee = {
        name: this.name.trim(),
        position: this.position.trim(),
        department: this.department.trim(),
      };
      this.employeeList.push(newEmployee);

      this.name = '';
      this.position = '';
      this.department = '';
    } else {

    }
  }
}
