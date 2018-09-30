import { NossaVisaoModule } from './nossa-visao.module';

describe('NossaVisaoModule', () => {
  let nossaVisaoModule: NossaVisaoModule;

  beforeEach(() => {
    nossaVisaoModule = new NossaVisaoModule();
  });

  it('should create an instance', () => {
    expect(nossaVisaoModule).toBeTruthy();
  });
});
