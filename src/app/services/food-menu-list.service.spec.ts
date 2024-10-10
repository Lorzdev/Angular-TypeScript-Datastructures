import { TestBed } from '@angular/core/testing';

import { FoodMenuListService } from './food-menu-list.service';

describe('FoodMenuListService', () => {
  let service: FoodMenuListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodMenuListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
