import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import '../../../../node_modules/rxjs/add/operator/toPromise';
import { UrlBuilderService } from '../url-builder/url-builder.service';

@Injectable()
export class GithubService {

  private readonly GITHUB_API_BASE_URL = 'api.github.com';
  private readonly GITHUB_API_REPO_URL = `/user/repos/`;
  private readonly GITHUB_API_REPO_PARAMS = new Map<string, string>([
    ['visibilty', 'public'],
    ['affiliation', 'owner'],
    ['sort', 'full_name'],
    ['direction', 'asc']
  ]);
  private readonly HEADERS = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'token __TOKEN_HERE__'
  });

  constructor(private http: Http,
    private urlBuilder: UrlBuilderService) { }


  getRepo(): Promise<any> {
    return Promise.reject('Not implemented yet');
  }

  getRepos(): Promise<any[]> {

    const GITHUB_API_REPO_FULL_URL = this.urlBuilder.build(
      this.GITHUB_API_BASE_URL,
      this.GITHUB_API_REPO_URL,
      this.GITHUB_API_REPO_PARAMS);

    return this.http
      .get(GITHUB_API_REPO_FULL_URL, new RequestOptions({ headers: this.HEADERS }))
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
