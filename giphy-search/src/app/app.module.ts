import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { GiphySearchManualModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { FormularioComponentModule } from './giphy/formulario/formulario.module';
import { ContatoModule } from './contato/contato.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HomeModule } from './home/home.module';
// import { ChangeDetectionComponent } from './change-detection/change-detection.component';
// import { GiphySearchAutoModule } from './giphy/giphy-search-auto/giphy-search-auto.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    ContatoModule,
    // Comentado para alterar estes dois módulos para Lazy Loading
    // GiphySearchManualModule,
    // GiphySearchAutoModule,
    FormularioComponentModule,
    HomeModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
