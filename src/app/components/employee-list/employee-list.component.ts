import { Component } from '@angular/core';
import {EmployeeService} from "../../services/employee-list.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})

export class EmployeeListComponent {
  name: string = '';
  position: string = '';
  department: string = '';
  searchTerm: string = '';
  employeeList: { name: string; position: string; department: string }[] = [];
  filteredEmployeeList: { name: string; position: string; department: string }[] = [];

  constructor(private employeeService: EmployeeService) {
    this.employeeList = this.employeeService.getEmployees();
    this.filteredEmployeeList = [...this.employeeList];
  }

  addEmployee() {
    if (this.name.trim() && this.position.trim() && this.department.trim()) {
      const newEmployee = {
        name: this.name.trim(),
        position: this.position.trim(),
        department: this.department.trim()
      };
      this.employeeService.addEmployee(newEmployee);
      this.updateEmployeeLists();
      this.clearInputs();
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeEmployee(index: number) {
    this.employeeService.removeEmployee(index);
    this.updateEmployeeLists();
  }

  clearAll() {
    this.employeeService.clearAllEmployees();
    this.updateEmployeeLists();
  }

  searchEmployees() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredEmployeeList = this.employeeList.filter(employee =>
      employee.name.toLowerCase().includes(searchLower) ||
      employee.position.toLowerCase().includes(searchLower) ||
      employee.department.toLowerCase().includes(searchLower)
    );
  }

  clearInputs() {
    this.name = '';
    this.position = '';
    this.department = '';
  }

  updateEmployeeLists() {
    this.employeeList = this.employeeService.getEmployees();
    this.searchEmployees();
  }
}
