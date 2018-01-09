import { Injectable } from '@angular/core';

import { Faker } from '../faker';
import { Project } from '../../../models/project';

@Injectable()
export class ProjectFakerService implements Faker {
  private readonly PROJECT_NAME = 'PROJECT_MOCK';
  private readonly PROJECT_DESC = 'Mock project for app showcase';
  private readonly PROJECT_LANG = 'Javascript';
  private readonly PROJECT_URL = '';
  private readonly PROJECT_GITHUB_URL = '';
  private readonly PROJECT_IMG = '/assets/img/fake.jpg';
  private readonly PROJECT_TOPICS = ['default'];

  constructor() { }

  fake(): Project {
    return new Project(
      this.PROJECT_NAME,
      this.PROJECT_DESC,
      this.PROJECT_LANG,
      this.PROJECT_URL,
      this.PROJECT_GITHUB_URL,
      this.PROJECT_IMG,
      this.PROJECT_TOPICS
    );
  }

  fakeMassively(n: number): Project[] {
    const projects = [];
    for (let i = 0; i < n; i++) {
      projects.push(this.fake());
    }

    return projects;
  }

}
