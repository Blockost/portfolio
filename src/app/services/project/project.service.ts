import { Injectable } from '@angular/core';

import { GithubService } from '../github/github.service';
import { Project } from '../../models/project';
import { ProjectLanguage } from '../../models/projectLanguage';

@Injectable()
export class ProjectService {
  constructor(private githubService: GithubService) {}

  getProject(): Promise<Project> {
    return Promise.reject('Not implemented yet');
  }

  getProjects(): Promise<Project[]> {
    return this.githubService
      .getRepos()
      .then(res => this.toProjects(res))
      .catch(this.handleError);
  }

  private toProjects(githubRepoCollections: any[]): Project[] {
    return githubRepoCollections
      .filter(repo => repo.fork === false)
      .map(repo =>
        Project.fromGithub(repo, this.getLanguagesForRepo(repo.name))
      );
  }

  private getLanguagesForRepo(repoName: string): ProjectLanguage[] {
    const projectLanguages: ProjectLanguage[] = [];

    this.githubService
      .getLanguagesForRepo(repoName)
      .then(res => {
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            projectLanguages.push(
              new ProjectLanguage(key.toLowerCase(), res[key])
            );
          }
        }
      })
      .catch(this.handleError);

    return projectLanguages;
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
