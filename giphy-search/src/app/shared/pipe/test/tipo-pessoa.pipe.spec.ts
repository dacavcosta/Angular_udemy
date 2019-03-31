import { TipoPessoaPipe } from '../tipo-pessoa.pipe';

describe('tipo-pessoa.pipe.spec.ts', () => {
    const tipoPessoaPipe: TipoPessoaPipe = new TipoPessoaPipe();

    it('Deve retornar Pessoa Física', () => {
        expect(tipoPessoaPipe.transform('F')).toEqual('Pessoa Física');
    });

    it('Deve retornar Pessoa Jurídica', () => {
        expect(tipoPessoaPipe.transform('J')).toEqual('Pessoa Jurídica');
    });

    it('Deve retornar vazio', () => {
        expect(tipoPessoaPipe.transform('x')).toEqual('');
    });
});
