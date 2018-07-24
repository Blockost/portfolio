import { inject, TestBed } from '@angular/core/testing';

import { ProjectFakerService } from './project-faker.service';

describe('ProjectFakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectFakerService]
    });
  });

  it('should be created', inject([ProjectFakerService], (service: ProjectFakerService) => {
    expect(service).toBeTruthy();
  }));
});
