import { AppcommonModule } from './appcommon.module';

describe('AppcommonModule', () => {
  let appcommonModule: AppcommonModule;

  beforeEach(() => {
    appcommonModule = new AppcommonModule();
  });

  it('should create an instance', () => {
    expect(appcommonModule).toBeTruthy();
  });
});
