import { Injectable } from '@angular/core';

import { Faker } from '../faker';
import { Project } from '../../../models/project';

@Injectable()
export class ProjectFakerService implements Faker {

  fake(): Project {
    return new Project(
      'PROJECT_MOCK',
      'Mock project for app showcase',
      '', '', '/assets/img/fake.jpg');
  }

  fakeMassively(n: number): Project[] {
    const projects = [];
    for (let i = 0; i < n; i++) {
      projects.push(this.fake());
    }

    return projects;
  }

  constructor() { }

}
