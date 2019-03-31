import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tipopessoa'
})

export class TipoPessoaPipe implements PipeTransform {
    transform(tipo: string): string {
        if (tipo === 'F') {
            return 'Pessoa Física';
        }
        if (tipo === 'J') {
            return 'Pessoa Jurídica';
        }

        return '';
    }
}
