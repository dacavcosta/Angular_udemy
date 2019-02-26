import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

// const host = 'http://localhost:8080/db/coll';
const host = 'http://172.17.0.2/db/coll';

@Injectable()
export class ContatoComponentService {

    constructor(private http: Http) {
    }

    enviarContato(contatoForm: any): Observable<Response> {
        const headers = new Headers();
        headers.append( 'Access-Control-Allow-Headers', '*' );
        headers.append( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        const nomeCompleto = contatoForm.nomeCompleto;
        const email = contatoForm.contato.email;
        const mensagem = 'Mensagem de teste'; // contatoForm.mensagem;
        console.log('nomeCompleto', nomeCompleto);
        console.log('email', email);
        console.log('mensagem', mensagem);

        return this.http.post(host, {email: email, from: nomeCompleto, message: mensagem}, { headers : headers });
    }
}
