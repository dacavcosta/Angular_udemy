import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GiphySearchManualComponentModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { FormularioComponentModule } from './giphy/formulario/formulario.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    GiphySearchManualComponentModule,
    FormularioComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
