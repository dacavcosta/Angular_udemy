import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit{

  constructor(private location: Location) { }

  ngOnInit() {
    console.log('url atual: ', document.location.href);
    console.log('location: ', location.href);
  }

  voltar() {
    this.location.back();
  }

}
