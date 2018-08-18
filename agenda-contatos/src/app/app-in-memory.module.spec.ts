import { AppInMemoryModule } from './app-in-memory.module';

describe('AppInMemoryModule', () => {
  let appInMemoryModule: AppInMemoryModule;

  beforeEach(() => {
    appInMemoryModule = new AppInMemoryModule();
  });

  it('should create an instance', () => {
    expect(appInMemoryModule).toBeTruthy();
  });
});
