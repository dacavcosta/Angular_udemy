import { Component, AfterViewInit, AfterViewChecked, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { AlertaComponent } from './alerta.component';

@Component({
  selector: 'app-view-child-view-children',
  template: `
  <app-alerta #inicio ok="Próximo" (fechar)="showAlert(2)">
    Passo 1: Aprenda angular - <a href="http://aprendaangular.com">http://aprendaangular.com</a>
  </app-alerta>

  <app-alerta ok="Próximo" (fechar)="showAlert(3)">
    Passo 2: Leia o código refinado <a href="http://medium.com/codigorefinado">http://medium.com/codigorefinado</a>
  </app-alerta>

  <app-alerta ok="Fechar">
    Step 3: Inscreva-se no <a href="https://www.youtube.com/channel/UCWHLFYc-15QhCyj5-FV5oPw">canal código refinado no youtube</a>
  </app-alerta>

  <button (click)="showAlert(1)">Mostrar os passos</button>
  `,
  styles: []
})
export class ViewChildViewChildrenComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('inicio') alerta: AlertaComponent;

  @ViewChildren(AlertaComponent) alertas = new QueryList<AlertaComponent>();

  alertasArr = [];

  ngAfterViewInit() {
    this.alertasArr = this.alertas.toArray();
  }

  ngAfterViewChecked() {
    /**
     * Poderia, por exemplo, pegar a um objeto dentro do filho e trazer para dentro deste componente aqui.
     */
  }

  showAlert(indice: any) {
    this.alertasArr[ indice - 1 ].show();
  }

}
