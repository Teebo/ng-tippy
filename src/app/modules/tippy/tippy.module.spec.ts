import { TippyModule } from './tippy.module';

describe('TippyModule', () => {
  let tippyModule: TippyModule;

  beforeEach(() => {
    tippyModule = new TippyModule();
  });

  it('should create an instance', () => {
    expect(tippyModule).toBeTruthy();
  });
});
