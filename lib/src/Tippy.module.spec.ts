import { TippyModule } from './Tippy.module';

describe('TippyModule', () => {
  let tippyModule: TippyModule;

  beforeEach(() => {
    tippyModule = new TippyModule();
  });

  it('should create an instance', () => {
    expect(tippyModule).toBeTruthy();
  });
});
