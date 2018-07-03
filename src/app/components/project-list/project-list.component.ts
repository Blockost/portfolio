import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project';
import { ProjectFakerService } from '../../services/faker/project/project-faker.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  private projects: Project[] = [];
  filteredProjects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private projectFakerService: ProjectFakerService
  ) {}

  ngOnInit() {
    this.populateProjects();
  }

  populateProjects() {
    this.projectService
      .getProjects()
      .then(projects => {
        this.projects = projects;
        this.filteredProjects = projects;
      })
      .catch(this.handleError.bind(this));
  }

  filter(filter: string) {
    this.filteredProjects = this.projects.filter(project =>
      project.contains(filter)
    );
  }

  private handleError(error: any) {
    const _projects = this.projectFakerService.fakeMassively(5);
    this.projects = _projects;
    this.filteredProjects = _projects;

    console.error(
      'Cannot retrieve projects from Github. Mock projects have been generated.'
    );
  }
}
