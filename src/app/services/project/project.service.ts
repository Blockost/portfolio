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
      .map(repo => this.buildProjectFromGithubRepo(repo));
  }

  private buildProjectFromGithubRepo(githubRepo: any): Project {
    // build project from github repository JSON object
    const project = Project.fromGithub(githubRepo);

    // Retrive all programming languages for that repository
    this.getLanguagesForRepo(githubRepo.name).then(languages => {
      // When it's OK, assign them to it
      project.languages = languages;

      // Store total numer of bytes of code
      const totalBytesOfCode = project.languages
        .map(language => language.bytesOfCode)
        .reduce((bytesOfCode1, bytesOfCode2) => bytesOfCode1 + bytesOfCode2);

      // Compute programming language percentage for each one
      project.languages.forEach(
        language =>
          (language.percentage = Math.round(
            this.computeLanguagePercentage(language, totalBytesOfCode)
          ))
      );
    });

    return project;
  }

  private getLanguagesForRepo(repoName: string): Promise<ProjectLanguage[]> {
    const projectLanguages: ProjectLanguage[] = [];

    return this.githubService
      .getLanguagesForRepo(repoName)
      .then(res => {
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            projectLanguages.push(new ProjectLanguage(key, res[key]));
          }
        }
        return projectLanguages;
      })
      .catch(this.handleError);
  }

  private computeLanguagePercentage(
    language: ProjectLanguage,
    numberOfLanguages: number
  ): number {
    return (language.bytesOfCode / numberOfLanguages) * 100;
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
