import { Component, OnInit } from '@angular/core';
import { RaizService } from './raiz.service';

@Component({
  selector: 'app-raiz',
  templateUrl: './raiz.component.html'
})
export class RaizComponent implements OnInit {
  conteudo: string;

  constructor(private raizService: RaizService) { }

  ngOnInit() {
    this.conteudo = 'Conteúdo da Raiz: ' + this.raizService.conteudo;
  }

  trocar() {
    this.raizService.conteudo = 'Clicado no componente Raiz';
    this.conteudo = this.raizService.conteudo;
  }

}
