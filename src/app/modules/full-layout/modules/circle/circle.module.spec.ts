import { CircleModule } from './circle.module';

describe('CircleModule', () => {
  let circleModule: CircleModule;

  beforeEach(() => {
    circleModule = new CircleModule();
  });

  it('should create an instance', () => {
    expect(CircleModule).toBeTruthy();
  });
});
