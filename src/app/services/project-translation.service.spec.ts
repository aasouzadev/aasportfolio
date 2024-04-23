import { TestBed } from '@angular/core/testing';

import { ProjectTranslationService } from './project-translation.service';

describe('ProjectTranslationService', () => {
  let service: ProjectTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
