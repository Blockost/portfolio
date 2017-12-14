import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project';
import { ProjectFakerService } from '../../services/faker/project/project-faker.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService,
    private projectFakerService: ProjectFakerService) { }

  ngOnInit() {
    this.populateProjects();
  }

  populateProjects() {
    this.projectService
      .getProjects()
      .then(projects => this.projects = projects)
      .catch(this.handleError.bind(this));
  }

  private handleError(error: any) {
    this.projects = this.projectFakerService.fakeMassively(5);

    console.error('Cannot retrieve projects from github. Mock projects have been generated.');
  }

}
