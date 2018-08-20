import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService]
    });
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));

  it('should receive people from api', inject([PeopleService], (service: PeopleService) => {
    service.getPeople().subscribe(res => {
      expect(res.body.count).toBeGreaterThan(0);
    });
  }));
});
