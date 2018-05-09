import { BlankLayoutModule } from './blank-layout.module';

describe('BlankLayoutModule', () => {
  let blankLayoutModule: BlankLayoutModule;

  beforeEach(() => {
    blankLayoutModule = new BlankLayoutModule();
  });

  it('should create an instance', () => {
    expect(blankLayoutModule).toBeTruthy();
  });
});
