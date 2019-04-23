import { Component, OnInit } from '@angular/core';
import { RaizService } from '../raiz.service';

@Component({
  selector: 'app-nvl1',
  templateUrl: './nvl1.component.html',
})
export class Nvl1Component implements OnInit {
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
