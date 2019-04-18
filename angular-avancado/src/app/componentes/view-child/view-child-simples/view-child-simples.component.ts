import { Component, ViewChild } from '@angular/core';
import { AlertaComponent } from './alerta.component';

@Component({
  selector: 'app-view-child-simples',
  template: `
    <app-alerta>AlertaComponent</app-alerta>
    <button (click)="showAlert()">Mostrar o componente Alerta</button>
  `,
  styles: []
})
export class ViewChildSimplesComponent {

  @ViewChild(AlertaComponent) alert: AlertaComponent;

  showAlert() {
    this.alert.show();
  }

}
