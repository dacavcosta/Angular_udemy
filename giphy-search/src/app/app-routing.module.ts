import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { HomeComponent } from './';
// import { PageNotFoundComponent } from './';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: 'giphy-search-manual',
            loadChildren: './giphy/giphy-search-manual/giphy-search-manual.module'
        },
        {
            path: 'giphy-search-auto',
            loadChildren: './giphy/giphy-search-auto/giphy-search-auto.module'
        },
        {
            path: 'diretiva-commom-module',
            loadChildren: './diretiva-commom-module/diretiva-commom-module.module'
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {}
