import { QuemSomosModule } from './quem-somos.module';

describe('QuemSomosModule', () => {
  let quemSomosModule: QuemSomosModule;

  beforeEach(() => {
    quemSomosModule = new QuemSomosModule();
  });

  it('should create an instance', () => {
    expect(quemSomosModule).toBeTruthy();
  });
});
