import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import '../../../../node_modules/rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {

  private readonly GITHUB_API_BASE_URL = 'https://api.github.com';
  private readonly GITHUB_API_REPO_URL = `${this.GITHUB_API_BASE_URL}/user/repos`;
  private readonly HEADERS = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'token 48a5743a09c6065c26fb0c5267afb8fe883d0f8c'
  });

  constructor(private http: Http) { }

  getRepo(): Promise<any> {
    return Promise.reject('Not implemented yet');
  }

  getRepos(): Promise<any[]> {
    return this.http
      .get(this.GITHUB_API_REPO_URL, new RequestOptions({headers: this.HEADERS}))
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }

}
