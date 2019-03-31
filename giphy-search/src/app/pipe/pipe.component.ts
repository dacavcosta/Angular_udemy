import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  dataCriacao = new Date(1988, 3, 15);
  mensagem = 'Aguarde o curso de IONIC, em breve, fique ligado no YouTube ';
  youtube = 'https://goo.gl/h50OpD';

  constructor() { }

  ngOnInit() {
  }

}
