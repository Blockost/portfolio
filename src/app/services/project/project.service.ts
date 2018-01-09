import { Injectable } from '@angular/core';

import { GithubService } from '../github/github.service';
import { Project } from '../../models/project';

@Injectable()
export class ProjectService {

  constructor(private githubService: GithubService) { }


  getProject(): Promise<Project> {
    return Promise.reject('Not implemented yet');
  }

  getProjects(): Promise<Project[]> {
    return this.githubService.getRepos()
      .then(res => this.toProjects(res))
      .catch(this.handleError);
  }

  private toProjects(githubRepoCollections: any[]): Project[] {
    return githubRepoCollections.map((repo: any) =>
      new Project(
        repo.name,
        repo.description,
        repo.language,
        repo.homepage,
        repo.html_url,
        '/assets/img/fake.jpg',
        repo.topics));
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }





}
