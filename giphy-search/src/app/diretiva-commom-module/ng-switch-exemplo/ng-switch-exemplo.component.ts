import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-exemplo',
  templateUrl: './ng-switch-exemplo.component.html',
  styleUrls: ['./ng-switch-exemplo.component.css']
})
export class NgSwitchExemploComponent {
  formatacao = 0;

  SetFormatacao(num: number) {
    this.formatacao = num;
  }

}
