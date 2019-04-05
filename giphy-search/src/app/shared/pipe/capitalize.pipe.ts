import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(texto: string): string {

        return texto.charAt(0).toUpperCase() + texto.substr(1).toLowerCase();
    }
}
