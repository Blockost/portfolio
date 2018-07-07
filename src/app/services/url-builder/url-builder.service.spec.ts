import { TestBed, inject } from '@angular/core/testing';

import { UrlBuilderService } from './url-builder.service';
import { serializePath } from '@angular/router/src/url_tree';

describe('UrlBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlBuilderService]
    });
  });

  it('should be created', inject(
    [UrlBuilderService],
    (service: UrlBuilderService) => {
      expect(service).toBeTruthy();
    }
  ));
});
