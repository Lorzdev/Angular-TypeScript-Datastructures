import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SpecificationsService {
  private specificationsList: string[] = [
    'Lenovo ThinkPad X1 Carbon: Intel Core i7, 16GB RAM, 1TB SSD',
    'NVIDIA GeForce GTX 1650',
    'MacBook Air: Apple M1, 8GB RAM, 256GB SSD',
  ];

  addSpecification(specification: string) {
    if (specification.trim()) {
      this.specificationsList.push(specification.trim());
    }
  }

  removeSpecification(specification: string) {
    const index = this.specificationsList.indexOf(specification);
    if (index > -1) {
      this.specificationsList.splice(index, 1);
    }
  }

  clearAll() {
    this.specificationsList = [];
  }

  getSpecificationsList(): string[] {
    return this.specificationsList;
  }

  searchSpecifications(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.specificationsList;
    }
    return this.specificationsList.filter(specification =>
      specification.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
