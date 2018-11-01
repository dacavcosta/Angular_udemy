import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'formulario-component',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  orientacao: string;

  constructor( private title: Title ) { }

  ngOnInit() {
    this.title.setTitle('Form');

    this.orientacao = 'Preencha';
  }

}
