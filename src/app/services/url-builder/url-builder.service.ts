import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable()
export class UrlBuilderService {

  constructor() { }


  /**
   * build an URL by smartly concatenating the base, the resource and the params. Can build URL using
   * HTTP or HTTPS
   * @param baseUrl the base URL (e.g 'github.com' )
   * @param resourceUrl the resource URL (e.g '/user/edit' )
   * @param params  map containing parameter names and values as key-value pairs
   * @param useHttps indicates whether to use HTTP or HTTPS
   */
  build(baseUrl: string,
    resourceUrl: string,
    params: Map<String, String>,
    useHttps = true) {

    baseUrl = this.removeSlashes(baseUrl);
    resourceUrl = this.removeSlashes(resourceUrl);

    const protocol = useHttps ? 'https://' : 'http://';
    let url = `${protocol}${baseUrl}/${resourceUrl}`;

    if (params !== undefined) {
      url += '?';
      params.forEach((value: string, key: string) => {
        url += `${key}=${value}&`;
      });
    }

    /* Delete the last '&' appended to the url
    * It is actually cleaner and faster to append
    * an '&' all the time and then delete the last one
    * than checking whether the key-value pair in the map
    * is the last one everytime...
    */
    return url.slice(0, -1);

  }


  /**
   * Remove slash ('/') at the beginning and the
   * end of the string
   * @param str the string to be processed
   * @returns the string without at both extremities
   */
  private removeSlashes(str: string) {

    if (str.endsWith('/')) {
      str = str.slice(0, -1);
    }

    if (str.startsWith('/')) {
      str = str.slice(1, str.length);
    }

    return str;
  }

}
