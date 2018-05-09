import { FullLayoutModule } from './full-layout.module';

describe('FullLayoutModule', () => {
  let fullLayoutModule: FullLayoutModule;

  beforeEach(() => {
    fullLayoutModule = new FullLayoutModule();
  });

  it('should create an instance', () => {
    expect(fullLayoutModule).toBeTruthy();
  });
});
