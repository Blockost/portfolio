import { inject, TestBed } from '@angular/core/testing';

import { serializePath } from '@angular/router/src/url_tree';
import { UrlBuilderService } from './url-builder.service';

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
