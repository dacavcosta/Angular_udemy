import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-exemplo',
  templateUrl: './ng-style-exemplo.component.html',
  styleUrls: ['./ng-style-exemplo.component.css']
})
export class NgStyleExemploComponent {
  // alertStyles: object;
  borderStyle = '1rem solid';
  cor = 'blue';
  alertStyles = {
    'color': 'yellow',
    'font-weight': 'bold',
    'border-bottom': this.borderStyle
  };
}
