import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.populateProjects();
  }

  populateProjects() {
    this.projectService
      .getProjects()
      .then(projects => this.projects = projects)
      .catch(this.handleError);
  }

  handleError(error: any) {
    this.projects = [];
    console.error('Shit happenned...');
  }

}
