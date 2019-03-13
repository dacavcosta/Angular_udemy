import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { HomeComponent } from './';
// import { PageNotFoundComponent } from './';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            // tslint:disable-next-line:max-line-length
            path: 'giphy-search-manual', loadChildren: './giphy/giphy-search-manual/giphy-search-manual.module'
        },
        {
            path: 'giphy-search-auto', loadChildren: './giphy/giphy-search-auto/giphy-search-auto.module'
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {}
